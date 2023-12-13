function fillCustomerValues() {
    document.getElementById('firstName').value = 'John';
    document.getElementById('lastName').value = 'Doe';
    document.getElementById('txtaddress').value = '123 Simple Street';
    document.getElementById('txtCity').value = 'Toronto';
    document.getElementById('province').value = 'ON';
    document.getElementById('txtPostalCode').value = 'A1A 1A1';
    document.getElementById('email').value = 'example@example.com';
    document.getElementById('txtPhone').value = '9051234567';
  }

  function fillEquipmentValues() {
    document.getElementById('txtAreaDescription').value = 'Lawnmower H345';
    document.getElementById('txtModelNumber').value = 'TRS-500';
    document.getElementById('manufacturer').value = '4';
    document.getElementById('category').value = '3';
    document.getElementById('color').value = '2';
  }

  function fillRepairOrderValues() {
    document.getElementById('textAreaRepairDescription').value = 'Engine Failure: Unable to Start';
    document.getElementById('warranty').value = '1';
  }

  function fillWorkLogValues() {
    document.getElementById('datetimepicker').value = '2023-12-12T12:00';
    document.getElementById('endDate').value = '2023-12-14T12:00';
    document.getElementById('textAreaDescription2').value = 'Fuel System Cleaning';
    document.getElementById('status').value = '2';
  }

  function fillWarrantyReportValues() {
    document.getElementById('start').value = '2023-11-12';
    document.getElementById('end').value = '2023-12-12';
    document.getElementById('manufacturer2').value = 'JD';
    document.getElementById('description').value = 'med';
  }

  function fillRepairReportValues() {
    document.getElementById('ordDate').value = '2023-11-12';
    document.getElementById('status2').value = 'C';
    document.getElementById('technician').value = 'S';
    document.getElementById('equipment').value = 'RE';
  }

  function fillWeeklyReportValues() {
    document.getElementById('sales').value = 'cw';
    document.getElementById('repairs').value = 'cwr';
  }