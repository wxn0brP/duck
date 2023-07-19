import time
import os

def read_file(filename):
    with open(filename, 'r') as file:
        return file.read()

txt = read_file("duck.txt")
colors = ["\x1b[31m","\x1b[32m","\x1b[33m","\x1b[34m","\x1b[35m","\x1b[36m","\x1b[90m"]

def display(color):
    print(color + txt + "\x1b[0m")

def delay(ms):
    time.sleep(ms / 1000)

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')

if __name__ == "__main__":
    clear_console()
    i = 0
    while True:
        display(colors[i])
        i += 1
        if i >= len(colors):
            i = 0
        delay(100)
        clear_console()
