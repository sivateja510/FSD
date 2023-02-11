import java.util.*;
import java.util.Collections;
class Assign
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n;
        n=sc.nextInt();
        ArrayList<Integer>al=new ArrayList<>();
        for(int i=0;i<n;i++)
        {
            al.add(sc.nextInt());
        }
        ArrayList<Integer>li=new ArrayList<>();
        int k=sc.nextInt();
        for(int i=1;i<k;i++)
        {
            if(al.contains(i)==false)
            {
                li.add(i);
            }
        }
        System.out.println(li);

    }
}