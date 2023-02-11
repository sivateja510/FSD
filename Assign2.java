import java.util.*;
import java.util.Collections;
class Assign2
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        HashMap<Integer,Integer>hm=new HashMap<>();
        int n;
        n=sc.nextInt();
        for(int i=0;i<n;i++)
        {
            int k=sc.nextInt();
            if(hm.containsKey(k))
            {
                hm.put(k,hm.get(k)+1);
            }
            else{
                hm.put(k,1);
            }
        }
        for(Map.Entry<Integer,Integer>ot:hm.entrySet())
        {
            if(ot.getValue()==1)
            {
                System.out.print(ot.getKey()+" ");
            }
        }
    }
}