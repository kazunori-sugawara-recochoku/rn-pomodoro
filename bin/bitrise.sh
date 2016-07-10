#!/bin/sh

curl https://www.bitrise.io/app/${BITRISE_APP_SLUG_IOS}/build/start.json --data '{"hook_info":{"type":"bitrise","api_token":"'${BITRISE_API_TOKEN_IOS}'"},"build_params":{"branch":"master"}}'

curl https://www.bitrise.io/app/${BITRISE_APP_SLUG_ANDROID}/build/start.json --data '{"hook_info":{"type":"bitrise","api_token":"'${BITRISE_API_TOKEN_ANDROID}'"},"build_params":{"branch":"master"}}'
