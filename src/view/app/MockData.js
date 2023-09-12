export const javaFile = "package c07.nested_classes.inner_class;\n" +
    "\n" +
    "/**\n" +
    " * @author muhammed-topgul\n" +
    " * @since 07/09/2023 20:44\n" +
    " */\n" +
    "public class Home {\n" +
    "    private String greeting = \"Hi\"; // Outer class instance variable\n" +
    "\n" +
    "    public void enterRoom() {\n" +
    "        Room room = new Room();\n" +
    "        room.enter();\n" +
    "        Room.greet(greeting);\n" +
    "    }\n" +
    "\n" +
    "    protected class Room {\n" +
    "        public int repeat = 3;\n" +
    "\n" +
    "        public void enter() {\n" +
    "            for (int i = 0; i < repeat; i++) {\n" +
    "                greet(greeting);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        private static void greet(String message) {\n" +
    "            System.out.println(message);\n" +
    "        }\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "class HomeMain extends Home {\n" +
    "    public void print() {\n" +
    "        System.out.println(new Room().repeat);\n" +
    "    }\n" +
    "\n" +
    "    public static void main(String[] args) {\n" +
    "        HomeMain homeMain = new HomeMain();\n" +
    "        homeMain.enterRoom();\n" +
    "        homeMain.print();\n" +
    "\n" +
    "        System.out.println();\n" +
    "        Home home = new Home();\n" +
    "        Room room = home.new Room();\n" +
    "        room.enter();\n" +
    "        System.out.println(home.getClass().getName());\n" +
    "        System.out.println(room.getClass().getName());\n" +
    "    }\n" +
    "}\n"