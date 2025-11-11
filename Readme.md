# Nepali Date Picker

A lightweight, customizable Nepali date picker component implemented in vanilla JavaScript, HTML, and CSS. Uses class names to attach the date picker.

## Features

- Single date or date range selection
- Convert between English (AD) and Nepali (BS) dates using ndc functions
- Display and return dates in Devanagari numerals
- Disable selection of past or future dates
- Clean, modern UI with easily customizable styling

## Demo

![Screenshot](https://github.com/user-attachments/assets/3454a0b4-04a5-4779-92a2-4011af293e69)

## Getting Started

### 1. Include Files

```html
<link rel="stylesheet" href="./nepalidatepicker.css" />
<script src="./nepalidatepicker.js"></script>
```

### 2. Add Input Fields

```html
<input class="nepaliDatePickerOlderDatesDisable" type="text" />
<input class="nepaliDatePicker" type="text" />
<input class="englishDatePicker" type="text" />

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
    },
  });

  buildEnglishCalendars();
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
| `disableTodaysDate`         | `boolean`  | `false`              | Disables selection of today's date           |
| `closeOnLoseFocus`          | `boolean`  | `true`               | Closes the calendar when clicked out         |
| `changeFunction`            | `function` | `() => {}`           | Callback when a valid date is selected       |
| `invalidDateFunction`       | `function` | `() => {}`           | Callback when an invalid date is entered     |

## Developer Notes

- The date picker supports the Nepali calendar from 1975 BS to 2099 BS.
- It converts dates using a static lookup table for accuracy.

## Author

Created by Bijesh Man Shrestha - [@electron7js](https://github.com/electron7js)

## To Add

Auto fetch latest dates array.

## Example tutorial code for oracle apex

```Javascript
// If the fields are named as required, like P1_Dob_BS and P1_Dob_AD for all date fields

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const bsInputs = document.querySelectorAll('input[id$="_BS"]');
const adInputs = document.querySelectorAll('input[id$="_AD"]');


adInputs.forEach(
    (x) => {
        x.classList.add("english-date-picker")
    }
)


bsInputs.forEach(
    (x) => {
        x.classList.add("nepali-date-picker")
    }
)


buildNepaliCalendars(
    {
        nepaliDatePickerClassName: "nepali-date-picker",
        disableLaterDates: true,
        closeOnSelect: false,
        disableTodaysDate: false,
        changeFunction: (data) => {
            apex.item(data.itemId).setValue(apex.item(data.itemId).getValue())
            ad_field = data.itemId.replace("_BS","_AD")
            apex.item(ad_field).setValue(
              formatDateToYYYYMMDD(  ndc.getEnglishDate(
                data.nepaliYear,data.nepaliMonth,data.nepaliDay
            )))
         },
        selectedDate: "2059-06-29",
        closeOnLoseFocus: true,
        invalidDateFunction: () => {
        }
    }
);

buildEnglishCalendars(
    {
        englishDatePickerClassName: "english-date-picker",
        disableLaterDates: true,
        closeOnSelect: false,
        disableTodaysDate: false,
        changeFunction: (data) => {
            apex.item(data.itemId).setValue(apex.item(data.itemId).getValue())
            bs_field = data.itemId.replace("_AD","_BS")
            apex.item(bs_field).setValue(
             ndc.getNepaliDate(
                data.nepaliYear,data.nepaliMonth,data.nepaliDay
            ))
         },        selectedDate: "2002-10-15",
        closeOnLoseFocus: true,
        invalidDateFunction: () => {
        }
    }
);
```
