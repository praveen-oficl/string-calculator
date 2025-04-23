import re

def add(numbers):
    if not numbers:
        return 0

    delimiter = ",|\n"
    if numbers.startswith("//"):
        match = re.match(r"//(.)\n(.*)", numbers)
        if match:
            delimiter = re.escape(match.group(1))
            numbers = match.group(2)

    parts = re.split(delimiter, numbers)
    nums = list(map(int, parts))
    negatives = [n for n in nums if n < 0]

    if negatives:
        raise Exception(f"negative numbers not allowed: {', '.join(map(str, negatives))}")

    return sum(nums)

