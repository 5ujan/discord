const wishes = [
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 May your special day be filled with love, laughter, and unforgettable memories. Here's to celebrating you and the incredible person you are. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Sending you the warmest birthday wishes, [Friend's Name]! May this day be just the beginning of a year filled with happiness, success, and all your heart desires. Cheers to you and the wonderful journey ahead!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as bright and beautiful as your smile. Here's to another year of laughter, friendship, and amazing adventures together. Wishing you endless joy and fulfillment!",
  },
  {
    message:
      "Wishing you a fantastic birthday, [Friend's Name]! May your special day be filled with love, laughter, and cherished moments with your loved ones. Here's to your continued growth, success, and happiness!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 May this day bring you all the happiness and joy you bring into the lives of those around you. Here's to another year of amazing accomplishments and unforgettable memories!",
  },
  {
    message:
      "On your birthday, [Friend's Name], I want to take a moment to appreciate the wonderful person you are. May your day be as incredible as you are and may the year ahead bring you nothing but success and happiness!",
  },
  {
    message:
      "Wishing you a birthday filled with love, laughter, and all the things that make you happiest, [Friend's Name]! May this year be your best one yet, filled with incredible opportunities and beautiful moments.",
  },
  {
    message:
      "Happy Birthday to my amazing friend, [Friend's Name]! 🎂 May your day be as bright as your smile and as wonderful as your presence. Here's to another year of laughter, love, and unforgettable memories!",
  },
  {
    message:
      "Sending you the happiest of birthday wishes, [Friend's Name]! May your day be filled with joy, love, and all the things that bring you happiness. Here's to celebrating you and the wonderful person you are!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 Wishing you a day that's as special and extraordinary as you are. May this year be filled with exciting opportunities, endless happiness, and all your heart desires!",
  },
  {
    message:
      "On your birthday, I want to thank you for being such an amazing friend, [Friend's Name]. Here's to celebrating you and all the wonderful memories we've shared together. Wishing you a day filled with happiness and a year filled with blessings!",
  },
  {
    message:
      "Wishing you the happiest of birthdays, [Friend's Name]! May this day be the beginning of a wonderful year filled with love, laughter, and countless blessings. Cheers to you and all the joy you bring into the world!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎂 May your day be as bright and beautiful as you are. Here's to another year of laughter, love, and unforgettable moments. Wishing you all the happiness and success in the world!",
  },
  {
    message:
      "Sending you my warmest wishes on your birthday, [Friend's Name]! May this day be a celebration of all the wonderful things that make you uniquely you. Here's to your continued happiness, success, and prosperity!",
  },
  {
    message:
      "Happy Birthday to the most amazing person I know, [Friend's Name]! 🎉 May your day be filled with love, laughter, and countless blessings. Here's to another year of friendship and unforgettable adventures!",
  },
  {
    message:
      "Wishing you a day filled with love, laughter, and everything you've ever wished for, [Friend's Name]! May this year be your best one yet, filled with endless opportunities and beautiful moments. Happy Birthday!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎂 May your day be as bright as your smile and as wonderful as your personality. Here's to another year of laughter, love, and unforgettable memories!",
  },
  {
    message:
      "On your special day, [Friend's Name], I want to wish you all the happiness and success in the world. May this year be filled with exciting adventures, amazing opportunities, and endless joy!",
  },
  {
    message:
      "Wishing you a birthday that's as incredible as you are, [Friend's Name]! May your day be filled with love, laughter, and all your heart desires. Here's to another year of friendship and amazing memories!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 May this day be as bright and beautiful as your smile. Here's to celebrating you and all the wonderful moments we've shared together. Wishing you all the happiness and success in the world!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 Wishing you a day filled with joy, laughter, and unforgettable memories. May this year bring you all the success and happiness you deserve. Here's to another amazing year ahead!",
  },
  {
    message:
      "On your special day, I want to send you my warmest wishes for a fantastic birthday, [Friend's Name]! May your life be filled with love, prosperity, and endless happiness. Cheers to you, my dear friend!",
  },
  {
    message:
      "Happy Birthday to someone who brings so much joy into the lives of others, [Friend's Name]! May your day be as bright and beautiful as you are. Here's to another year of amazing adventures and incredible accomplishments. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Sending you the biggest birthday hugs and warmest wishes on your special day, [Friend's Name]! May the coming year be filled with exciting opportunities, great achievements, and boundless happiness. Here's to chasing dreams and making unforgettable memories!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day that's as amazing as you are. May your journey ahead be filled with success, prosperity, and all the happiness your heart can hold. Cheers to another fabulous year of life!",
  },
  {
    message:
      "On your birthday, I want to express my heartfelt wishes for your happiness and success, [Friend's Name]. May your life be blessed with abundant joy, love, and prosperity. Here's to celebrating you and all the wonderful moments yet to come!",
  },
  {
    message:
      "Wishing you a spectacular birthday filled with laughter, love, and unforgettable moments, [Friend's Name]! May this year be your best one yet, filled with endless opportunities, growth, and happiness. Cheers to your success and all the amazing things still to come!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 May your special day be as wonderful and unique as you are. Here's to another year of incredible achievements, exciting adventures, and everlasting happiness. Wishing you all the success in the world!",
  },
  {
    message:
      "Sending you heartfelt birthday wishes on your special day, [Friend's Name]! May the coming year bring you closer to your dreams and aspirations. Here's to a life filled with love, laughter, and boundless joy. Happy Birthday!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎂 Wishing you a day filled with laughter, love, and unforgettable memories. May the year ahead bring you countless blessings, success in all your endeavors, and endless happiness. Cheers to you!",
  },
  {
    message:
      "On this special day, I want to wish you the happiest of birthdays, [Friend's Name]! May your life be filled with love, laughter, and incredible moments. Here's to chasing your dreams, achieving your goals, and finding true happiness along the way. Happy Birthday, my friend!",
  },
  {
    message:
      "Wishing you the happiest of birthdays, filled with love, laughter, and all the things that bring you joy, [Friend's Name]! May your journey ahead be bright and prosperous, and may success follow you wherever you go. Here's to celebrating you and the amazing person you are!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 May your special day be as bright and beautiful as you are. Wishing you success in all your endeavors, happiness that knows no bounds, and a lifetime filled with love and laughter. Cheers to another fabulous year ahead!",
  },
  {
    message:
      "Sending you my warmest wishes on your birthday, [Friend's Name]! May this year be a remarkable chapter in your life's journey, filled with happiness, success, and fulfillment. Here's to creating unforgettable memories and achieving all your dreams. Happy Birthday!",
  },
  {
    message:
      "Happy Birthday to someone who deserves all the happiness in the world, [Friend's Name]! May your day be filled with love, laughter, and cherished moments. Here's to your continued success, both personally and professionally. Wishing you a fantastic year ahead!",
  },
  {
    message:
      "Wishing you a very Happy Birthday, [Friend's Name]! 🎂 May your day be as wonderful and extraordinary as you are. Here's to a future filled with limitless possibilities, abundant joy, and unparalleled success. Cheers to you, my dear friend!",
  },
  {
    message:
      "On your birthday, I want to extend my warmest wishes for a day filled with love, laughter, and unforgettable moments, [Friend's Name]. May the year ahead be full of exciting adventures, remarkable achievements, and endless happiness. Happy Birthday!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎉 Wishing you a day that's as amazing as you are. May your life be filled with love, laughter, and all the success you desire. Here's to celebrating you and the wonderful person you've become. Cheers to another fantastic year ahead!",
  },
  {
    message:
      "Sending you the biggest birthday wishes on your special day, [Friend's Name]! May this year bring you closer to your dreams and aspirations. Here's to embracing new opportunities, overcoming challenges, and finding happiness in every moment. Happy Birthday!",
  },
  {
    message:
      "Happy Birthday [Friend's Name]! 🎂 Wishing you a day filled with joy, laughter, and unforgettable memories. May the year ahead be marked by success in all your endeavors and happiness in everything you do. Cheers to you and your bright future!",
  },
  {
    message:
      "On your special day, I want to send you my warmest wishes for a fantastic birthday, [Friend's Name]! May your life be filled with love, prosperity, and endless happiness. Here's to another year of amazing adventures and incredible accomplishments. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 Wishing you a day filled with love, laughter, and unforgettable memories. May this new chapter of your life bring you closer to your dreams and aspirations!",
  },
  {
    message:
      "On your special day, [Friend's Name], I want to send you my warmest wishes for a fantastic birthday! May your life be filled with love, joy, and success in everything you do.",
  },
  {
    message:
      "Wishing you the happiest of birthdays, [Friend's Name]! May your day be as bright as your smile and as joyful as your heart. Here's to another year of wonderful adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as amazing and special as you are. Here's to celebrating you and the wonderful person you've become. Cheers to another fabulous year ahead!",
  },
  {
    message:
      "Sending you my warmest wishes on your birthday, [Friend's Name]! May this year be filled with love, laughter, and all the happiness you deserve. Here's to celebrating you and your beautiful life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with laughter, love, and cherished moments. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Wishing you a day filled with joy and laughter, [Friend's Name], on your special day! May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with happiness, love, and all the things that bring you joy. Here's to another year of fabulous adventures and unforgettable memories!",
  },
  {
    message:
      "Sending you the biggest birthday hugs, [Friend's Name]! May your day be as wonderful and extraordinary as you are. Here's to celebrating you and the incredible person you've always been!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with love, laughter, and the company of good friends. Here's to another year of wonderful surprises and beautiful memories!",
  },
  {
    message:
      "Wishing you a fantastic birthday, [Friend's Name]! May your day be filled with joy, love, and all the things that make you smile. Here's to celebrating you and your amazing journey ahead!",
  },
  {
    message:
      "Happy Birthday to someone who brightens everyone's day, [Friend's Name]! May your special day be as wonderful as you are. Here's to a year filled with love, laughter, and endless possibilities!",
  },
  {
    message:
      "Sending you my warmest birthday wishes, [Friend's Name]! May your day be filled with happiness, love, and all the things that make you smile. Here's to celebrating you and your incredible life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with love, laughter, and unforgettable moments. May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Wishing you a birthday filled with love, laughter, and cherished memories, [Friend's Name]! May this year be your best one yet, filled with happiness, success, and all your heart desires!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your day be as bright and beautiful as you are. Here's to celebrating you and all the wonderful moments yet to come. Cheers to another amazing year ahead!",
  },
  {
    message:
      "Sending you the happiest of birthday wishes, [Friend's Name]! May your day be filled with joy, love, and countless blessings. Here's to celebrating you and the incredible person you are!",
  },
  {
    message:
      "Wishing you a birthday that's as amazing as you are, [Friend's Name]! May your day be filled with laughter, love, and all the things that bring you happiness. Here's to another year of fabulous adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as wonderful and special as you are. Here's to celebrating you and the joy you bring into the lives of everyone around you. Cheers to another fantastic year ahead!",
  },
  {
    message:
      "On your birthday, [Friend's Name], I want to wish you all the happiness and success in the world. May this day be just the beginning of an amazing year ahead, filled with love, laughter, and incredible adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 Wishing you a day filled with love, laughter, and unforgettable memories. May this new chapter of your life bring you closer to your dreams and aspirations!",
  },
  {
    message:
      "On your special day, [Friend's Name], I want to send you my warmest wishes for a fantastic birthday! May your life be filled with love, joy, and success in everything you do.",
  },
  {
    message:
      "Wishing you the happiest of birthdays, [Friend's Name]! May your day be as bright as your smile and as joyful as your heart. Here's to another year of wonderful adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as amazing and special as you are. Here's to celebrating you and the wonderful person you've become. Cheers to another fabulous year ahead!",
  },
  {
    message:
      "Sending you my warmest wishes on your birthday, [Friend's Name]! May this year be filled with love, laughter, and all the happiness you deserve. Here's to celebrating you and your beautiful life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with laughter, love, and cherished moments. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Wishing you a day filled with joy and laughter, [Friend's Name], on your special day! May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with happiness, love, and all the things that bring you joy. Here's to another year of fabulous adventures and unforgettable memories!",
  },
  {
    message:
      "Sending you the biggest birthday hugs, [Friend's Name]! May your day be as wonderful and extraordinary as you are. Here's to celebrating you and the incredible person you've always been!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with love, laughter, and the company of good friends. Here's to another year of wonderful surprises and beautiful memories!",
  },
  {
    message:
      "Wishing you a fantastic birthday, [Friend's Name]! May your day be filled with joy, love, and all the things that make you smile. Here's to celebrating you and your amazing journey ahead!",
  },
  {
    message:
      "Happy Birthday to someone who brightens everyone's day, [Friend's Name]! May your special day be as wonderful as you are. Here's to a year filled with love, laughter, and endless possibilities!",
  },
  {
    message:
      "Sending you my warmest birthday wishes, [Friend's Name]! May your day be filled with happiness, love, and all the things that make you smile. Here's to celebrating you and your incredible life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with love, laughter, and unforgettable moments. May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Wishing you a birthday filled with love, laughter, and cherished memories, [Friend's Name]! May this year be your best one yet, filled with happiness, success, and all your heart desires!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your day be as bright and beautiful as you are. Here's to celebrating you and all the wonderful moments yet to come. Cheers to another amazing year ahead!",
  },
  {
    message:
      "Sending you the happiest of birthday wishes, [Friend's Name]! May your day be filled with joy, love, and countless blessings. Here's to celebrating you and the incredible person you are!",
  },
  {
    message:
      "Wishing you a birthday that's as amazing as you are, [Friend's Name]! May your day be filled with laughter, love, and all the things that bring you happiness. Here's to another year of fabulous adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as wonderful and special as you are. Here's to celebrating you and the joy you bring into the lives of everyone around you. Cheers to another fantastic year ahead!",
  },
  {
    message:
      "On your birthday, [Friend's Name], I want to wish you all the happiness and success in the world. May this day be just the beginning of an amazing year ahead, filled with love, laughter, and incredible adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 Wishing you a day filled with love, laughter, and unforgettable memories. May this new chapter of your life bring you closer to your dreams and aspirations!",
  },
  {
    message:
      "On your special day, [Friend's Name], I want to send you my warmest wishes for a fantastic birthday! May your life be filled with love, joy, and success in everything you do.",
  },
  {
    message:
      "Wishing you the happiest of birthdays, [Friend's Name]! May your day be as bright as your smile and as joyful as your heart. Here's to another year of wonderful adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as amazing and special as you are. Here's to celebrating you and the wonderful person you've become. Cheers to another fabulous year ahead!",
  },
  {
    message:
      "Sending you my warmest wishes on your birthday, [Friend's Name]! May this year be filled with love, laughter, and all the happiness you deserve. Here's to celebrating you and your beautiful life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with laughter, love, and cherished moments. Wishing you all the success and happiness in the world!",
  },
  {
    message:
      "Wishing you a day filled with joy and laughter, [Friend's Name], on your special day! May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with happiness, love, and all the things that bring you joy. Here's to another year of fabulous adventures and unforgettable memories!",
  },
  {
    message:
      "Sending you the biggest birthday hugs, [Friend's Name]! May your day be as wonderful and extraordinary as you are. Here's to celebrating you and the incredible person you've always been!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your special day be filled with love, laughter, and the company of good friends. Here's to another year of wonderful surprises and beautiful memories!",
  },
  {
    message:
      "Wishing you a fantastic birthday, [Friend's Name]! May your day be filled with joy, love, and all the things that make you smile. Here's to celebrating you and your amazing journey ahead!",
  },
  {
    message:
      "Happy Birthday to someone who brightens everyone's day, [Friend's Name]! May your special day be as wonderful as you are. Here's to a year filled with love, laughter, and endless possibilities!",
  },
  {
    message:
      "Sending you my warmest birthday wishes, [Friend's Name]! May your day be filled with happiness, love, and all the things that make you smile. Here's to celebrating you and your incredible life!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 Wishing you a day filled with love, laughter, and unforgettable moments. May this year bring you closer to your dreams and fill your heart with happiness!",
  },
  {
    message:
      "Wishing you a birthday filled with love, laughter, and cherished memories, [Friend's Name]! May this year be your best one yet, filled with happiness, success, and all your heart desires!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎉 May your day be as bright and beautiful as you are. Here's to celebrating you and all the wonderful moments yet to come. Cheers to another amazing year ahead!",
  },
  {
    message:
      "Sending you the happiest of birthday wishes, [Friend's Name]! May your day be filled with joy, love, and countless blessings. Here's to celebrating you and the incredible person you are!",
  },
  {
    message:
      "Wishing you a birthday that's as amazing as you are, [Friend's Name]! May your day be filled with laughter, love, and all the things that bring you happiness. Here's to another year of fabulous adventures!",
  },
  {
    message:
      "Happy Birthday, [Friend's Name]! 🎂 May your day be as wonderful and special as you are. Here's to celebrating you and the joy you bring into the lives of everyone around you. Cheers to another fantastic year ahead!",
  },
  {
    message:
      "On your birthday, [Friend's Name], I want to wish you all the happiness and success in the world. May this day be just the beginning of an amazing year ahead, filled with love, laughter, and incredible adventures!",
  },
];


module.exports = wishes