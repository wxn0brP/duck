#include <iostream>
#include <fstream>
#include <vector>
#include <chrono>
#include <thread>

std::string read_file(const std::string& filename) {
    std::ifstream file(filename);
    std::string content((std::istreambuf_iterator<char>(file)),
                        (std::istreambuf_iterator<char>()));
    return content;
}

void display(const std::string& color, const std::string& txt) {
    std::cout << color << txt << "\x1b[0m" << std::endl;
}

void delay(int ms) {
    std::this_thread::sleep_for(std::chrono::milliseconds(ms));
}

int main() {
    std::string txt = read_file("duck.txt");
    std::vector<std::string> colors = {"\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m", "\x1b[36m", "\x1b[90m"};

    int i = 0;
    while (true) {
        display(colors[i], txt);
        i++;
        if (i >= colors.size()) {
            i = 0;
        }
        delay(100);
        system("cls");
    }

    return 0;
}
