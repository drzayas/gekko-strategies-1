# gekko-TD Sequential

Tom Demark sequential indicator written in Javascript for node.js.

## TD Sequential | Trading Indicator

https://oxfordstrat.com/indicators/td-sequential-2/

http://practicaltechnicalanalysis.blogspot.com/2013/01/tom-demark-sequential.html




## TD Sequential | Trading Strategy

https://oxfordstrat.com/trading-strategies/td-sequential-1/

https://tradetrekker.wordpress.com/tdsequential/


A. Set Up Criteria

1. For a Buy signal. Nine consecutive daily price closes which are lower than the close four days earlier.
For a Sell signal. Nine consecutive daily price closes which are higher than the closes four days earlier.
2. An Absolute Prerequisite
The day prior to the first day of a nine consecutive set up sequence must:
for a buy signal have a close higher than or equal to the close four days earlier,
for a sell signal have a close lower than or equal to the close four days earlier.

B. Count Down

For a buy signal, following the successful completion of the count down we wait for thirteen closes which are lower than the close two days earlier (not consecutive, in fact extremely unlikely to be so).
For a sell signal, after successful set up, wait for thirteen closes which are higher than the close two days earlier.

C. Entry

On successful completion of set up and count down we now have a choice:
1. Enter on the close of the day that the count down is completed, i.e. the close of the thirteenth defined close. This is the most aggressive and highest risk entry but most closely approximates the exact high or low of the trend about to be reversed. However, it is the entry most likely to be whipsawed if the Sequential fails.
Entry after reversal
2. On a close higher for a buy (lower for a sell) than a close four days earlier after the count down has been concluded, i.e. post reversal.
3. On a close higher for a buy (lower for a sell) than the high (low) two days earlier after conclusion of the count down, i.e. a compromise between a) and b)



## Authors

* [scubix](https://github.com/scubix)
* [hurly](https://github.com/HurlyDesousa)

See also the list of [contributors](https://github.com/scubix/gekko-strategies/graphs/contributors) who participated in this project.
