import java.util.*;
import java.util.Collections;
class Cumsum
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        ArrayList<Integer>li=new ArrayList<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++)
        {
            li.add(sc.nextInt());
        }
        int i;
        System.out.print(li.get(0));
        for(i=1;i<n;i++)
        {
            li.set(i,(li.get(i)+li.get(i-1)));
            System.out.print(li.get(i-1)+" ");
        }
        System.out.print(li.get(i-1));

    }
}