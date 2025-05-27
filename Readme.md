# Nepali Date Picker

A lightweight, customizable Nepali date picker component implemented in vanilla JavaScript, HTML, and CSS. Uses class names to attach the date picker.

## Features

- Single date or date range selection
- Convert between English (AD) and Nepali (BS) dates using ndc functions
- Display and return dates in Devanagari numerals
- Disable selection of past or future dates
- Clean, modern UI with easily customizable styling

## Demo

![Screenshot](https://github.com/user-attachments/assets/37378ae1-9286-4f53-9f4c-9062198b9c1e)

## Getting Started

### 1. Include Files

```html
<link rel="stylesheet" href="./nepalidatepicker.css" />
<script src="./nepalidatepicker.js"></script>
````

### 2. Add Input Fields

```html
<input class="nepaliDatePickerOlderDatesDisable" type="text" />
<input class="nepaliDatePicker" type="text" />
```

### 3. Initialize the Picker

```html
<script>
  buildNepaliCalendars(); // Default configuration

  buildNepaliCalendars({
    nepaliDatePickerClassName: "nepaliDatePickerOlderDatesDisable",
    disableLaterDates: true,
    closeOnSelect: false,
    changeFunction: (data) => {
      console.log(data);
    },
    invalidDateFunction: () => {
      alert("Invalid date entered.");
    }
  });
</script>
```

## Configuration Options

| Option                      | Type       | Default              | Description                                  |
| --------------------------- | ---------- | -------------------- | -------------------------------------------- |
| `nepaliDatePickerClassName` | `string`   | `'nepaliDatePicker'` | Class name to target input fields            |
| `rangeSelection`            | `boolean`  | `false`              | Enables date range selection                 |
| `devnagariNumbersDisplay`   | `boolean`  | `false`              | Shows dates in Devanagari script             |
| `devnagariNumbersReturn`    | `boolean`  | `false`              | Returns selected date in Devanagari          |
| `closeOnSelect`             | `boolean`  | `true`               | Automatically closes the picker on selection |
| `disableEarlierDates`       | `boolean`  | `false`              | Disables selection of dates before today     |
| `disableLaterDates`         | `boolean`  | `false`              | Disables selection of dates after today      |
| `changeFunction`            | `function` | `() => {}`           | Callback when a valid date is selected       |
| `invalidDateFunction`       | `function` | `() => {}`           | Callback when an invalid date is entered     |

## Developer Notes

- The date picker supports the Nepali calendar from 1975 BS to 2099 BS.
- It converts dates using a static lookup table for accuracy.

## Author

Created by Bijesh Man Shrestha - [@electron7js](https://github.com/electron7js)

## To Add

Auto fetch latest dates array.
