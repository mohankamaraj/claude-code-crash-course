import sys
from datetime import datetime

print("CLAUDE PYTHON:", sys.executable, flush=True)
print("STOP HOOK TRIGGERED!", file=sys.stderr, flush=True)

# Write to a log file to confirm execution
with open("/tmp/claude_stop_hook.log", "a") as f:
    f.write(f"{datetime.now()}: Stop hook executed\n")