<?php

// http://js-clock.loc/demo.php

date_default_timezone_set('UTC');
$timezone = new DateTimeZone(date_default_timezone_get());
$timezoneOffset = $timezone->getOffset(new DateTime(null, $timezone));

?>
<!DOCTYPE html>
<html>
<head>
    <title>Clock</title>
    <meta charset="utf-8">
    <script src="JsClock.js"></script>
    <script>
      window.addEventListener('DOMContentLoaded', function () {

        var clockTarget = document.getElementById('js-clock');
        var timeZoneOffsetElement = document.getElementById('time-zone-offset');
        var timeZoneOffset = timeZoneOffsetElement.textContent;

        var jsClock = new JsClock({
          targetElement: clockTarget,
          autoStart: false,
          timeZoneOffset: timeZoneOffset
        });

        document
          .getElementById('js-clock--start')
          .addEventListener('click', function () {
            jsClock.start();
          });

        document
          .getElementById('js-clock--stop')
          .addEventListener('click', function () {
            jsClock.stop();
          });

      });
    </script>
</head>
<body>
    <div id="js-clock"></div>
    <hr>
    <button id="js-clock--start">Start</button>
    <button id="js-clock--stop">Stop</button>
    <div id="time-zone-offset" style="display: none;">
        <?= $timezoneOffset ?>
    </div>
</body>
</html>
