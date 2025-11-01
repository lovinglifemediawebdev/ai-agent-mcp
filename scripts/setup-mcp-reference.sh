#!/usr/bin/env bash
set -euo pipefail

# Fetches the appropriate MCP reference file. Designed to run seamlessly inside
# both Codex CLI and Cursor CLI on macOS, while still supporting Windows usage.
# Usage:
#   bash scripts/setup-mcp-reference.sh
#   bash scripts/setup-mcp-reference.sh custom-name.md
#   bash scripts/setup-mcp-reference.sh --platform mac --output custom-name.md

BASE_URL="https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main"
MAC_URL="${BASE_URL}/MCP-REFERENCE-mac.md"
WIN_URL="${BASE_URL}/MCP-REFERENCE.md"

OUTPUT_FILE="MCP-REFERENCE.md"
PLATFORM="auto"
POSITIONAL_OUTPUT_SET="false"

usage() {
  cat <<'EOF'
Usage: bash scripts/setup-mcp-reference.sh [options] [output-file]

Options:
  --platform <mac|windows|auto>  Override platform detection (default: auto)
  --output, -o <path>            Specify output file (default: MCP-REFERENCE.md)
  -h, --help                     Show this help message

Examples:
  bash scripts/setup-mcp-reference.sh
  bash scripts/setup-mcp-reference.sh MyReference.md
  bash scripts/setup-mcp-reference.sh --platform mac --output docs/MCP.md
EOF
}

while (($#)); do
  case "$1" in
    --platform)
      if [ $# -lt 2 ]; then
        echo "Error: --platform requires a value" >&2
        usage
        exit 1
      fi
      PLATFORM="$2"
      shift 2
      ;;
    --output|-o)
      if [ $# -lt 2 ]; then
        echo "Error: $1 requires a value" >&2
        usage
        exit 1
      fi
      OUTPUT_FILE="$2"
      POSITIONAL_OUTPUT_SET="true"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [ "$POSITIONAL_OUTPUT_SET" = "false" ]; then
        OUTPUT_FILE="$1"
        POSITIONAL_OUTPUT_SET="true"
        shift
      else
        echo "Unknown argument: $1" >&2
        usage
        exit 1
      fi
      ;;
  esac
done

UNAME="$(uname -s 2>/dev/null || echo unknown)"
PLATFORM_LOWER="$(printf '%s' "$PLATFORM" | tr '[:upper:]' '[:lower:]')"

case "$PLATFORM_LOWER" in
  auto|"")
    if [ "$UNAME" = "Darwin" ]; then
      DOWNLOAD_URL="$MAC_URL"
    else
      DOWNLOAD_URL="$WIN_URL"
    fi
    ;;
  mac|darwin)
    DOWNLOAD_URL="$MAC_URL"
    ;;
  win|windows|powershell)
    DOWNLOAD_URL="$WIN_URL"
    ;;
  *)
    echo "Error: unsupported platform '$PLATFORM'. Use mac, windows, or auto." >&2
    exit 1
    ;;
esac

curl -fsSL "$DOWNLOAD_URL" -o "$OUTPUT_FILE"
echo "✅ Downloaded MCP reference from ${DOWNLOAD_URL##*/} to ${OUTPUT_FILE}"
