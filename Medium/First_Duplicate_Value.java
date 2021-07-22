import java.util.*;

class Program
{
	public int firstDuplicateValue(int[] array)
	{
		boolean isFound = false;
		int duplicate_index = -1;
		for( int i=0; i<array.length; i++ )
		{
			isFound = false;
			for( int b=0; b<i; b++ )
			{
				if( array[i] == array[b] )
				{
					isFound = true;
					break;
				}
			}
			if( isFound )
			{
				continue;
			}

			for( int j=i+1; j<array.length; j++ )
			{
				if( array[i] == array[j] && ( duplicate_index == -1 || duplicate_index > j ) )
				{
					duplicate_index = j;
					break;
				}
			}

		}

		return duplicate_index == -1 ? -1 : array[duplicate_index];
	}
}
