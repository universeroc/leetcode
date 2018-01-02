class Solution {
 public:
  int calculate(string s) {
    std::vector<std::string> nums;
    std::stack<char> ops;

    auto instant_calc = [](char op) -> bool { return op == ')'; };

    auto string_to_integer = [](const std::string& s) -> int {
      int sum = 0;
      for (std::string::const_reverse_iterator i = s.crbegin(); i != s.crend();
           i++) {
        int offset = i - s.crbegin();
        sum += ((*i) - '0') * pow(10, offset);
      }
      return sum;
    };

    assert(string_to_integer("10") == 10);
    assert(string_to_integer("100") == 100);
    assert(string_to_integer("1234567") == 1234567);

    auto int_to_string = [](int n) -> std::string {
      std::string s;
      int len = 0;
      int cn = n;
      do {
        len++;
        cn /= 10;
      } while (cn);
      for (auto i = len - 1; i >= 0; --i) {
        int w = n / static_cast<int>(pow(10, i));
        s += char('0' + w);
        n = n % static_cast<int>(pow(10, i));
      }
      assert(!s.empty());
      return s;
    };

    assert(int_to_string(123456) == "123456");
    assert(int_to_string(1000) == "1000");
    assert(int_to_string(10) == "10");
    assert(int_to_string(9) == "9");

    auto calc_internal = [&]() -> void {
      int sum = 0;
      // get the nums and pop until (
      while (ops.size() > 0 && ops.top() != '(') {
        char op = ops.top();
        ops.pop();
        std::string n = nums[nums.size() - 1];
        nums.pop_back();
        int rn = string_to_integer(n);
        if (op == '-') {
          sum -= rn;
        } else if (op == '+') {
          sum += rn;
        }
      }

      // means there is '('
      if (ops.size() > 0) {
        ops.pop();  // pop '('
      }

      std::string n = nums[nums.size() - 1];
      nums.pop_back();
      int rn = string_to_integer(n);
      sum += rn;
      std::string s = int_to_string(sum);
      nums.push_back(s);
    };

    int current_index = 0;
    for (const auto& c : s) {
      if (!isblank(c)) {
        if (isdigit(c)) {
          // if previous is digit, means its part of number
          if (current_index > 0) {
            if (isdigit(s[current_index - 1])) {
              nums[nums.size() - 1] += c;
            } else {
              nums.push_back(std::string() + c);
            }
          } else {
            nums.push_back(std::string() + c);
          }
        } else if (c == '+' || c == '-') {
          ops.push(c);
        } else if (instant_calc(c)) {
          calc_internal();
        } else if (c == '(') {
          ops.push(c);
        } else {
          // do nothing
        }
      } else {
        // ignore ' '
      }

      current_index++;
    }

    calc_internal();

    std::string r = nums[nums.size() - 1];
    return string_to_integer(r);
  }
};
