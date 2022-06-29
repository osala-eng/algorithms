# Solution

```javascript
function solution (K){
    const binary = K.toString(2) // converting integer K to binary
    let gap = 0 , found_one = false, count = 0

    /**
     * For loop to count the number of zeros between ones
     */
    for(let i = 0; i < binary.length; i++){
        if (binary.charAt(i) === "1" && !found_one){
            found_one = true
            continue
        }
        if (binary.charAt(i) === "0" && found_one){
            count += 1
            continue
        }
        if (binary.charAt(i) === "1" && found_one){
            if (count > gap) gap = count
            count = 0
            continue
        }
    }
    return gap
}
```