function bubbleSort(arr)
{
    let n = arr.length;
  
    // Traverse through all array elements
    for(let i = 0; i < n; i++) 
    {
        // Last i elements are already in place
        for (j = 0; j < n - i - 1; j++) 
        {
            // traverse the array from 0 to n-i-1
            // Swap if the element found is greater
            // than the next element
            if (arr[j] > arr[j+1])
            {
                // t = arr[j];
                arr[j] = arr[j+1];
                // arr[j+1] = t;
            }
        }
    }
}
  
// Driver code to test above
arr =  new Array(5, 1, 4, 2, 8);
  
bubbleSort(arr);
  
console.log("Sorted array :",arr);
  
