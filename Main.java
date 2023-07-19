import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main{
    public static String readFile(String filename) throws IOException{
        return new String(Files.readAllBytes(Paths.get(filename)));
    }

    public static void display(String color, String txt){
        System.out.println(color + txt + "\u001B[0m");
    }

    public static void delay(int ms){
        try{
            Thread.sleep(ms);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException{
        String txt = readFile("duck.txt");
        String[] colors = {"\u001B[31m", "\u001B[32m", "\u001B[33m", "\u001B[34m", "\u001B[35m", "\u001B[36m", "\u001B[90m"};

        int i = 0;
        while (true){
            display(colors[i], txt);
            i++;
            if(i >= colors.length){
                i = 0;
            }
            delay(100);
            clearConsole();
        }
    }

    public static void clearConsole(){
        try{
            final String os = System.getProperty("os.name");
            if(os.contains("Windows")){
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            }else{
                Runtime.getRuntime().exec("clear");
            }
        }catch(final Exception e){
            System.out.println("Error while trying to clear console: " + e.getMessage());
        }
    }
}
