def add(numbers):
    if not numbers:
        return 0
    parts = numbers.split(",")
    total = 0
    for part in parts:
        total += int(part)
    return total
