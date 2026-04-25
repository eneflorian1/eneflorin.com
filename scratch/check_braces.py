import os

file_path = r'c:\Users\Admin\Documents\GitHub\eneflorin.com\app\globals.css'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

open_count = content.count('{')
close_count = content.count('}')

print(f"Open: {open_count}")
print(f"Close: {close_count}")

if open_count != close_count:
    print("MISMATCH DETECTED!")
    # Find where the imbalance starts
    stack = []
    for i, char in enumerate(content):
        if char == '{':
            stack.append(i)
        elif char == '}':
            if not stack:
                print(f"Extra closing brace at index {i}")
            else:
                stack.pop()
    for start_index in stack:
        # Get line number
        line_num = content[:start_index].count('\n') + 1
        print(f"Unclosed opening brace at line {line_num}")
