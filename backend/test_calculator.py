from calculator import add
import pytest

def test_empty_string():
    assert add("") == 0

def test_single_number():
    assert add("1") == 1

def test_two_numbers():
    assert add("1,2") == 3

def test_multiple_numbers():
    assert add("1,2,3,4") == 10

def test_newline_delimiter():
    assert add("1\n2,3") == 6

def test_custom_delimiter():
    assert add("//;\n1;2") == 3

def test_negative_number_throws():
    with pytest.raises(Exception) as e:
        add("1,-2,3")
    assert "negative numbers not allowed" in str(e.value)
    assert "-2" in str(e.value)

def test_multiple_negatives():
    with pytest.raises(Exception) as e:
        add("1,-2,-3,4")
    assert "negative numbers not allowed" in str(e.value)
    assert "-2, -3" in str(e.value)
