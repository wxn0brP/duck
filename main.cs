using System;
using System.IO;
using System.Threading;

public class Program{
    public static void Display(string color, string txt){
        Console.WriteLine(color + txt + "\x1b[0m");
    }

    public static void Main(string[] args){
        string txt = File.ReadAllText("duck.txt");
        string[] colors = { "\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m", "\x1b[36m", "\x1b[90m" };

        int i = 0;
        while (true){
            Display(colors[i], txt);
            i++;
            if(i >= colors.Length){
                i = 0;
            }
            Thread.Sleep(100);
            Console.Clear();
        }
    }
}
