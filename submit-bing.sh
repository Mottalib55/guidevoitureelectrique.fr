#!/usr/bin/env bash
# submit-bing.sh — Submit URLs to Bing IndexNow API
# Usage: BING_API_KEY=15b1d26333aa4cd7a1cdba8e813bfc7f ./submit-bing.sh

set -euo pipefail

BING_API_KEY="${BING_API_KEY:-15b1d26333aa4cd7a1cdba8e813bfc7f}"
HOST="guidevoitureelectrique.fr"
KEY_LOCATION="https://${HOST}/${BING_API_KEY}.txt"

# Extract URLs from sitemap.xml
SITEMAP_URL="https://${HOST}/sitemap.xml"
echo "Fetching sitemap from ${SITEMAP_URL}..."

URLS=$(curl -s "${SITEMAP_URL}" | grep -oP '(?<=<loc>)[^<]+')

# Build JSON payload
URL_LIST=""
while IFS= read -r url; do
  [ -z "$url" ] && continue
  URL_LIST="${URL_LIST}\"${url}\","
done <<< "$URLS"
URL_LIST="${URL_LIST%,}"

PAYLOAD="{\"host\":\"${HOST}\",\"key\":\"${BING_API_KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":[${URL_LIST}]}"

echo "Submitting $(echo "$URLS" | wc -l | tr -d ' ') URLs to Bing IndexNow..."

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "202" ]; then
  echo "Success (HTTP ${HTTP_CODE}). URLs submitted to IndexNow."
else
  echo "Error (HTTP ${HTTP_CODE}): ${BODY}"
  exit 1
fi
