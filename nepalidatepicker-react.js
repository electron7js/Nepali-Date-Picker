export const ndc = {
  ENGLISH_START_DATE: new Date(1913, 3, 13),
  nepaliYearMonths: {
    1970: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1971: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    1972: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    1973: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1974: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    1975: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    1976: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    1977: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    1978: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1979: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    1980: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    1981: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    1982: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1983: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    1984: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    1985: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    1986: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1987: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    1988: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    1989: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    1990: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1991: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    1992: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    1993: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1994: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1995: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    1996: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    1997: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1998: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    1999: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2073: [32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 31],
    2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2081: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2082: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2083: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2085: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2086: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2087: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2088: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2090: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2091: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2092: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2093: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2094: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2095: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2096: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2097: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2098: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2099: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  },

  //   getNepaliDate(year,month,day){
  //     getNepaliDate(`${year}-${month}-${day}`);
  // },

  getNepaliDate(year, month, day) {
    const englishDate = new Date(`${year}-${month}-${day} 5:45`);
    //   const englishDate = new Date(dateInput);
    if (englishDate < ndc.ENGLISH_START_DATE) {
      throw new Error("Only dates after 1913-04-14 are supported");
    }

    const totalDays = Math.floor(
      (englishDate - ndc.ENGLISH_START_DATE) / (1000 * 60 * 60 * 24)
    );
    let remainingDays = totalDays;
    let bsYear = 1970;
    let bsMonth = 1;
    let bsDay = 1;

    while (remainingDays > 0) {
      const daysInMonth = ndc.nepaliYearMonths[bsYear][bsMonth - 1];
      if (remainingDays >= daysInMonth) {
        remainingDays -= daysInMonth;
        bsMonth++;
        if (bsMonth > 12) {
          bsMonth = 1;
          bsYear++;
        }
      } else {
        bsDay += remainingDays;
        if (bsDay > daysInMonth) {
          bsDay = daysInMonth;
        }
        remainingDays = 0;
      }
    }

    return `${bsYear}-${String(bsMonth).padStart(2, "0")}-${String(
      bsDay
    ).padStart(2, "0")}`;
  },

  getNepaliDateFromString(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) {
      throw new Error(`Invalid date format: ${dateStr}`);
    }
    return getNepaliDate(date);
  },

  getDaysBetween(year1, month1, day1, year2, month2, day2) {
    let totalDays = 0;
    let tempYear = year1;
    let tempMonth = month1;
    let tempDay = day1;

    while (tempYear !== year2 || tempMonth !== month2 || tempDay !== day2) {
      if (tempYear !== year2 || tempMonth !== month2) {
        totalDays += ndc.nepaliYearMonths[tempYear][tempMonth - 1];
        // console.log(tempYear + " " + tempMonth + " " + year2);
        tempMonth++;
        if (tempMonth > 12) {
          tempMonth = 1;
          tempYear++;
        }
      } else {
        if (tempDay < day2) {
          tempDay++;
          totalDays++;
        } else if (tempDay > day2) {
          tempDay--;
          totalDays--;
        }
      }
    }

    return totalDays;
  },

  getEnglishDate(year, month, day) {
    if (year < 1970 || year > 2099) {
      throw new Error(
        "Only dates after 1970-01-01 and upto 2099-12-30 are supported"
      );
    }
    if (month < 0 || month > ndc.nepaliYearMonths[year][month]) {
      throw new Error("Invalid number of months in the year");
    }

    const totalDays = this.getDaysBetween(1970, 1, 1, year, month, day);
    const totalMilliseconds = totalDays * 86400000 -1789948800000;
    return new Date(totalMilliseconds);
  },

  getFiscalYear(year, month, day) {
    if (year < 1970 || year > 2099) {
      throw new Error(
        "Only dates after 1970-01-01 and upto 2099-12-30 are supported"
      );
    }

    return month <= 3 ? String(year - 1) : String(year);
  },
  isBetweenDates(year, month, day, year1, month1, day1, year2, month2, day2) {
    if (year >= year1 && year <= year2) {
      if (month > month1 && month < month2) {
        return true;
      }
      if (month == month1 && month == month2) {
        if (day >= day1 && day <= day2) {
          return true;
        }
      }

      if (month == month1 && month < month2) {
        if (day >= day1) {
          return true;
        }
      }
      if (month > month1 && month == month2) {
        if (day <= day2) {
          return true;
        }
      }
    }
    console.log(year, month, day, year1, month1, day1, year2, month2, day2);
    return false;
  },
  toDevanagariNumber: (num) => {
    const devanagariDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return String(num)
      .split("")
      .map((char) => {
        return /\d/.test(char) ? devanagariDigits[char] : char;
      })
      .join("");
  },
  getMaxNepaliYear : () =>{
    return Math.max(...Object.keys(ndc.nepaliYearMonths).map(Number)); 
  },
  getMinNepaliYear : () =>{
    return Math.min(...Object.keys(ndc.nepaliYearMonths).map(Number)); 
  }
};

export function daysInMonth(year, month) {
  return ndc.nepaliYearMonths[year][month];
}


export function buildNepaliCalendars(options = {}) {

  const {
    nepaliDatePickerClassName = "nepaliDatePicker",
    rangeSelection = false,
    devnagariNumbersDisplay = false,
    devnagariNumbersReturn = false,
    closeOnSelect = true,
    disableEarlierDates = false,
    disableLaterDates = false,
    changeFunction = () => {},
    invalidDateFunction = () => {}
  } = options;

  const today = new Date();
  today.setHours(0,0,0);
  var englishYear = today.getFullYear();
  var englishMonthIndex = today.getMonth();
  var englishDayIndex = today.getDate();
  var todayNepali = ndc.getNepaliDate(
    englishYear,
    englishMonthIndex+1,
    englishDayIndex
  );
  var curNepyear = parseInt(todayNepali.split("-")[0]);
  var curNepmonth = parseInt(todayNepali.split("-")[1])-1;
  var curNepday = parseInt(todayNepali.split("-")[2]);
  const maxNepYear = ndc.getMaxNepaliYear();
  const minNepYear = ndc.getMinNepaliYear();

  const inputs = document.querySelectorAll(
    `input.${nepaliDatePickerClassName}`
  );

  const containers = [];

  inputs.forEach((inp) => {
    const containerDiv = document.createElement("div");
    containerDiv.correspondingInput = inp;
    inp.addEventListener("click", () => {
      containerDiv.style.display = "block";
      const rect = inp.getBoundingClientRect();
      containerDiv.style.left = rect.left + window.scrollX + "px";
      containerDiv.style.top = rect.bottom + window.scrollY + "px";
      containerDiv.style.display = "block";
    });
    containerDiv.classList.add("nepali-date-picker-container");
    document.body.appendChild(containerDiv);
    containers.push(containerDiv);
  });
  containers.forEach((container) => {
    var viewYear = curNepyear;
    var viewMonth = curNepmonth;
    // var selectedNepday = curNepday;

    var selectedYear = curNepyear;
    var selectedMonth = curNepmonth;
    var selectedNepday = curNepday;

    container.correspondingInput.addEventListener("change", (event)=>{
      if(container.correspondingInput.value.match(/[^0-9-]+/) ){
        container.correspondingInput.value="";
        invalidDateFunction();
        return;
      }
      const enteredDate = container.correspondingInput.value.split("-");
      const year = parseInt(enteredDate[0]);
      if (year< minNepYear || year > maxNepYear){
        container.correspondingInput.value="";
        invalidDateFunction();
        return;
      }
      const month = parseInt(enteredDate[1]);
      if(month<0 || month>11){
        container.correspondingInput.value="";
        invalidDateFunction();
        return;
      }
      const day = parseInt(enteredDate[2]);

      if(day<1 || day>daysInMonth(year,month-1)){
        container.correspondingInput.value="";
        invalidDateFunction();
        return;
      }
       if (
              ((day > curNepday &&
                month-1 == curNepmonth &&
                year == curNepyear) ||
                year > curNepyear ||
                (month-1 > curNepmonth && year == curNepyear)) &&
              disableLaterDates
            ) {
              container.correspondingInput.value="";
        invalidDateFunction();
              return;
            }
            if (
              ((day < curNepday &&
                month-1 == curNepmonth &&
                year == curNepyear) ||
                year < curNepyear ||
                (month-1 < curNepmonth && year == curNepyear)) &&
              disableEarlierDates
            ) {
              container.correspondingInput.value="";
        invalidDateFunction();
              return;
  }
      selectedYear=year;
      selectedMonth=month-1;
      selectedNepday=day;
      viewYear=year;
      viewMonth=month-1;
      yearView.value=year;
      monthView.value=month-1;
      updateCalendar(topBar,calendarGrid);
      
      
    })

    var selectedYearStart = null;
    var selectedMonthStart = null;
    var selectedNepdayStart = null;

    var selectedYearEnd = null;
    var selectedMonthEnd = null;
    var selectedNepdayEnd = null;

    container.innerHTML = "";
    const topBar = document.createElement("div");
    const yearView = document.createElement("select");
    const monthView = document.createElement("select");

    // monthView.outerHTML="Month:"+(selectedMonth+1);

    const years = Object.keys(ndc.nepaliYearMonths);
    const months = [
      "बैशाख",
      "जेठ",
      "असार",
      "साउन",
      "भदौ",
      "असोज",
      "कार्तिक",
      "मंसिर",
      "पौष",
      "माघ",
      "फागुन",
      "चैत",
    ];

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearView.appendChild(option);
    });
    yearView.value = curNepyear;

    months.forEach((month) => {
      const option = document.createElement("option");
      option.value = months.indexOf(month);
      option.textContent = month;
      monthView.appendChild(option);
    });
    monthView.value = selectedMonth;

    topBar.classList.add("top-bar");

    const backButton = document.createElement("button");
    const forwardButton = document.createElement("button");
    const closeButton = document.createElement("button");

    backButton.innerHTML = "<";
    forwardButton.innerHTML = ">";
    closeButton.innerHTML = "X";
    backButton.classList.add("nav-button");
    forwardButton.classList.add("nav-button");
    closeButton.classList.add("close-button");

    backButton.addEventListener("click", () => {
      if (viewMonth > 0) {
        viewMonth -= 1;
      } else {
        viewMonth = 11;
        viewYear -= 1;
        yearView.value = viewYear;
      }
      monthView.value = viewMonth;
      updateCalendar(topBar, calendarGrid);
    });

    forwardButton.addEventListener("click", () => {
      if (viewMonth < 11) {
        viewMonth += 1;
      } else {
        viewMonth = 0;
        viewYear += 1;
        yearView.value = viewYear;
      }
      monthView.value = viewMonth;
      updateCalendar(topBar, calendarGrid);
    });

    closeButton.addEventListener("click", () => {
      container.style.display = "none";
    });

    topBar.appendChild(backButton);
    topBar.appendChild(yearView);
    topBar.appendChild(monthView);
    topBar.appendChild(forwardButton);
    topBar.appendChild(closeButton);
    if (rangeSelection) {
      const startDate = document.createElement("div");
      startDate.innerHTML = `Start Date: ${selectedYearStart}-${selectedMonthStart}-${selectedNepdayStart}  End Date:  ${selectedYearEnd}-${selectedMonthEnd}-${selectedNepdayEnd}`;

      topBar.appendChild(startDate);
      topBar.startDate = startDate;

      const clearButton = document.createElement("button");
      clearButton.innerHTML = "clear dates";
      clearButton.addEventListener("click", (event) => {
        selectedYearStart = null;
        selectedMonthStart = null;
        selectedNepdayStart = null;

        selectedYearEnd = null;
        selectedMonthEnd = null;
        selectedNepdayEnd = null;
        updateCalendar(topBar, calendarGrid);
      });

      topBar.append(clearButton);
    }

    const calendarGrid = document.createElement("div");

    const updateCalendar = (topBar, calendarGrid) => {
      if (rangeSelection)
        topBar.startDate.innerHTML = `Start Date: ${selectedYearStart}-${selectedMonthStart}-${selectedNepdayStart}  End Date:  ${selectedYearEnd}-${selectedMonthEnd}-${selectedNepdayEnd}`;

      calendarGrid.innerHTML = "";
      calendarGrid.style.display = "grid";
      calendarGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
      calendarGrid.style.gap = "5px";

      for (let day = 1; day <= daysInMonth(viewYear, viewMonth); day++) {
        const dayDiv = document.createElement("div");
        const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

        if (day == 1) {
          weekDays.forEach((day) => {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("weekday-div");
            dayDiv.innerText = day;
            calendarGrid.appendChild(dayDiv);
          });
          var dayoffset = 0;
          for (
            dayoffset = 1;
            dayoffset <=
            new Date(ndc.getEnglishDate(viewYear, viewMonth + 1, 1)).getDay();
            dayoffset++
          ) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day-div");
            calendarGrid.appendChild(dayDiv);
          }
        }

        if (!devnagariNumbersDisplay) {
          dayDiv.textContent = day;
        } else {
          dayDiv.textContent = ndc.toDevanagariNumber(day);
        }
        dayDiv.value = day;

        //   dayDiv.dataset.day = day;
        //   dayDiv.dataset.month = month;
        //   dayDiv.dataset.year = year;
        dayDiv.classList.add("day-div");
        if (
          ((day > curNepday &&
            viewMonth == curNepmonth &&
            viewYear == curNepyear) ||
            viewYear > curNepyear ||
            (viewMonth > curNepmonth && viewYear == curNepyear)) &&
          disableLaterDates
        ) {
          dayDiv.classList.add("disabled-day-div");
        }
        if (
          ((day < curNepday &&
            viewMonth == curNepmonth &&
            viewYear == curNepyear) ||
            viewYear < curNepyear ||
            (viewMonth < curNepmonth && viewYear == curNepyear)) &&
          disableEarlierDates
        ) {
          dayDiv.classList.add("disabled-day-div");
        }

        if (
          day == curNepday &&
          viewMonth == curNepmonth &&
          viewYear == curNepyear
        ) {
          dayDiv.classList.add("currentDate");
        }

        if (!rangeSelection) {
          if (
            day == selectedNepday &&
            selectedMonth == viewMonth &&
            selectedYear == viewYear
          ) {
            dayDiv.classList.add("selectedDate");
          }
          dayDiv.addEventListener("click", (event) => {
            if (
              ((day > curNepday &&
                viewMonth == curNepmonth &&
                viewYear == curNepyear) ||
                viewYear > curNepyear ||
                (viewMonth > curNepmonth && viewYear == curNepyear)) &&
              disableLaterDates
            ) {
              return;
            }
            if (
              ((day < curNepday &&
                viewMonth == curNepmonth &&
                viewYear == curNepyear) ||
                viewYear < curNepyear ||
                (viewMonth < curNepmonth && viewYear == curNepyear)) &&
              disableEarlierDates
            ) {
              return;
            }
            selectedNepday = event.target.value;
            selectedMonth = parseInt(monthView.value);
            selectedYear = parseInt(yearView.value);

            if (devnagariNumbersReturn) {
              container.correspondingInput.value = ndc.toDevanagariNumber(
                `${selectedYear}-${String(selectedMonth+1).padStart(
                  2,
                  "0"
                )}-${String(selectedNepday).padStart(2, "0")}`
              );
            } else {
              container.correspondingInput.value = `${selectedYear}-${String(
                selectedMonth+1
              ).padStart(2, "0")}-${String(selectedNepday).padStart(2, "0")}`;
            }

            if (closeOnSelect) {
              container.style.display = "none";
            }

            // console.log(this.correspondingInput);
            updateCalendar(topBar, calendarGrid);

            changeFunction({
              nepaliYear: selectedYear,
              nepaliMonth: selectedMonth+1,
              nepaliDay: selectedNepday,
            });
          });
        } else {
          if (selectedNepdayEnd != null && selectedNepdayStart != null) {
            // const convertedSelectedStart = new Date(ndc.getEnglishDate(parseInt(selectedYearStart),parseInt(selectedMonthStart+1),parseInt(selectedNepdayStart)));
            // const convertedSelectedEnd = new Date(ndc.getEnglishDate(parseInt(selectedYearEnd),parseInt(selectedMonthEnd+1), parseInt(selectedNepdayEnd)));
            // const convertedProcessingDate = new Date(ndc.getEnglishDate(parseInt(viewYear),parseInt(viewMonth+1),parseInt(day)));

            if (
              //    convertedProcessingDate>=convertedSelectedStart && convertedProcessingDate<=convertedSelectedEnd
              ndc.isBetweenDates(
                parseInt(viewYear),
                parseInt(viewMonth),
                parseInt(day),
                parseInt(selectedYearStart),
                parseInt(selectedMonthStart),
                parseInt(selectedNepdayStart),
                parseInt(selectedYearEnd),
                parseInt(selectedMonthEnd),
                parseInt(selectedNepdayEnd)
              )
            ) {
              dayDiv.classList.add("selectedDate");
            }
          }
          dayDiv.addEventListener("click", (event) => {
            if (
              // event.target.innerHTML<selectedNepdayStart ||  monthView.value<selectedMonthStart ||yearView.value<selectedYearStart || ]

              selectedNepdayStart == null
            ) {
              selectedNepdayStart = event.target.innerHTML;
              selectedMonthStart = monthView.value;
              selectedYearStart = yearView.value;
              console.log(
                "start " +
                  selectedNepdayStart +
                  " " +
                  selectedMonthStart +
                  " " +
                  selectedYearStart +
                  "\nend " +
                  selectedNepdayEnd +
                  " " +
                  selectedMonthEnd +
                  " " +
                  selectedYearEnd +
                  "end"
              );
            } else {
              selectedNepdayEnd = event.target.innerHTML;
              selectedMonthEnd = monthView.value;
              selectedYearEnd = yearView.value;
              console.log(
                "start " +
                  selectedNepdayStart +
                  " " +
                  selectedMonthStart +
                  " " +
                  selectedYearStart +
                  "\nend " +
                  selectedNepdayEnd +
                  " " +
                  selectedMonthEnd +
                  " " +
                  selectedYearEnd
              );
            }
            updateCalendar(topBar, calendarGrid);
          });
        }

        calendarGrid.appendChild(dayDiv);
      }
    };

    updateCalendar(topBar, calendarGrid);

    yearView.addEventListener("change", (event) => {
      viewYear = parseInt(event.target.value);
      updateCalendar(topBar, calendarGrid);
    });

    monthView.addEventListener("change", (event) => {
      viewMonth = parseInt(event.target.value);
      console.log(viewMonth)
      updateCalendar(topBar, calendarGrid);
    });

    container.appendChild(topBar);
    container.appendChild(calendarGrid);
  });
}

