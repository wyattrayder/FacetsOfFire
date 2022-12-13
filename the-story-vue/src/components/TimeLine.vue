<template>
  <div id="container">
    <!-- Freshman Year -->
    <v-card light flat class="yearCards">
      <v-container>
        <v-layout
          class="flexAndCenter"
          style="font-family: 'Niconne', cursive !important"
        >
          <strong class="mr-4">Freshman Year</strong>
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'green lighten-1'"
        :itemTitle="'Calculus & Cunningham'"
        :itemSubTitle="'August 2019'"
        :itemText="`My first day of college had arrived. 
                    I had high hopes and dreams of making new friends. 
                    That day I saw an amazing girl, who just so 
                    happened to be in my first two classes -- Calculus 
                    & Cunningham`"
        :itemQuote="'~Falling for a Stranger~'"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-square-root'"
      />
      <time-line-item
        :titleBarColor="'green lighten-1'"
        :itemTitle="'Instruments & Integrals'"
        :itemSubTitle="'September 2019'"
        :itemText="`I'm not big on missing class, especially not the one that
                    came to be Dr. Finan's class.  I had to march in 
                    the Yell County parade for band! I was going to miss so much
                    in just one lecture!  I knew I had to get the notes from someone.
                    I knew exactly who I wanted to ask -- Ms. Faith Walker.  Did a 
                    quick Instagram search and boom!  You hooked me up with some excellent
                    notes.  Man, she is nice, I want her to be my friend.`"
        :itemQuote="'~And then I saw her blue eyes..~'"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-music-note-eighth'"
      />
      <time-line-item
        :titleBarColor="'green lighten-1'"
        :itemTitle="`A's & Applause`"
        :itemSubTitle="'October 2019'"
        :itemText="`We gained some friendship and both agreed that the first Dr. Finan
                    test was just not it.  The second test rolled around and who killed it
                    out of the room of mostly sophomores?  The two freshman.  We received 
                    A's and applause.  I love how smart she is.`"
        :itemQuote="'~ *insert first message here* ~'"
        :itemIcon="'mdi-hand-clap'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- Sophomore Year -->
    <v-card light flat class="yearCards">
      <v-container>
        <v-layout class="flexAndCenter">
          <strong class="mr-4">Sophomore Year</strong>
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'blue lighten-1'"
        :itemTitle="` Friends and Ferocity `"
        :itemSubTitle="'Fall 2020'"
        :itemText="`We had grown to be pretty good friends.  I admired
                    your intelligence and geekiness.  I had found an
                    excellent friend.  This was cut short, however, due
                    to the ferocity of one.`"
        :itemQuote="`~Nobody in his right mind would've left her~`"
        :quoteGiver="'George Strait'"
        :itemIcon="'mdi-emoticon-sad'"
      />
      <time-line-item
        :titleBarColor="'blue lighten-1'"
        :itemTitle="`Gloom & Gauss' Law `"
        :itemSubTitle="'Spring 2020'"
        :itemText="` We both had a rough Spring semester in 2020.  We were
                     both in Dr. Hankins class for Physics II.  I felt terrible
                     for the sudden cut-off in our communications the semester before.
                     I felt in my heart that I needed to let you know why I had stopped
                     talking to you.  I am thankful I did.  I will never forget the day
                     that I walked out of Baz with Hunter and I saw you.  I did a sort of
                     nervous wave and you looked down and kept going.  My heart shattered.
                     I thought I had lost a friend for good.  Is this what I wanted? Gloom
                     and Gauss' Law.`"
        :itemQuote="`~You were always on my mind~`"
        :quoteGiver="'Willie Nelson'"
        :itemIcon="'mdi-emoticon-sad'"
      />
      <time-line-item
        :titleBarColor="'blue lighten-1'"
        :itemTitle="`Praying & Podcasts `"
        :itemSubTitle="'Summer 2021'"
        :itemText="`That summer I prayed and prayed because I did not know what to do.  I
                    went through many hardships before I decided it was time.  I followed
                    the advice that my parents gave me -- 'Follow your heart and find someone
                    who will truly will love you. Love cannot be one sided'.  The day I messaged
                    you that summer, my heart felt full again.  The rest of the summer was filled
                    with 'Dear Hank and John', Zoopocalypse, and nerd talk with Faith.  I am thankful for praying 
                    and podcasts.`"
        :itemQuote="`~Every storm runs out of rain~`"
        :quoteGiver="'Gary Allen'"
        :itemIcon="'mdi-podcast'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- Junior Year -->
    <v-card light flat class="yearCards">
      <v-container>
        <v-layout class="flexAndCenter">
          <strong class="mr-4">Junior Year</strong>
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Zoopocalypse & a Zephyr`"
        :itemSubTitle="'August 2021'"
        :itemText="`This was the most excited I had been for a semester yet.  I had
                    been in consistent contact with you throughout the end of the summer
                    and I loved every minute of it.  Now was my chance to interact with you
                    face-to-face -- one small leap for man, one giant leap for Wyatt-kind.  
                    You had agreed to come over to test out the game I made over the summer,
                    Zoopocalypse.  I was incredibly nervous, but I went through with it.  Also,
                    I had lucked out and you lived one building over from me.  This was a great
                    start to a great semester. Words of the day and crazy scenarios -- I really
                    like this girl.  A zephyr of happiness flew through my soul.`"
        :itemQuote="`~A melody softly soaring through my atmosphere~`"
        :quoteGiver="'Death Cab for Cutie'"
        :itemIcon="'mdi-elephant'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Matrix Man & Midtown`"
        :itemSubTitle="'October 2021'"
        :itemText="`I got out of my comfort zone -- I wanted to prove to myself
                    , and you, that I could do something fun for you!  We had been
                    discussing how it would be nice just to go with no phones and
                    talk via window messages.  So, I devised a plan that included
                    a simple Hello! (with a backwards e on accident) message and a man
                    made from a matrix -- Matrix Man.  I was so happy that you liked him.
                    Just a couple of days later, you invited me to study with you for our
                    Linear test at Midtown.  Oh, what a great day :)  I was able to grow
                    close to you through Matrix Man and Midtown.`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-matrix'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Space Tayto & Sonic Cheese Sticks`"
        :itemSubTitle="'February 2022'"
        :itemText="`It was February 4th.  Faith wanted cheese sticks.  Faith, however, did not
                    want to get out in the frigid weather to acquire said cheese sticks at 8pm.
                    Wyatt, however, is, as Faith would say, a madman!  I wanted to show to you 
                    that I would go out of my way for you -- I wanted to be a good friend!  So,
                    I treked through the icy terrain on my bike in three layers of clothes all of 
                    the way to the Sonic!  I got you cheese sticks and me a raspberry lemonade (a
                    Wyatt classic).  It was worth every penny.  Not only did you get your slightly warm
                    and not smushed cheese sticks -- the starch, the myth, the legend Space Tayto shipped
                    that night.  Can't get much better than that, can you?`"
        :itemQuote="`~Look at the stars. Look how they shine for you. And everything you do.~`"
        :quoteGiver="'Coldplay'"
        :itemIcon="'mdi-star-shooting'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Sumos & Stiles Stilinski`"
        :itemSubTitle="'February 2022'"
        :itemText="`Our first date lives rent-free in my head.  I will never forget that
                    night.  I took you to a nice dinner at Sumos and we had agreed to watch
                    Teen Wolf afterwards.  As I prepped the TV when you came over for Teen Wolf,
                    you had resided on my bed.  I wasn't sure if you were comfortable with me sitting
                    next to you, so I proposed that I could sit in the chair *or* on the bed.  I ended up
                    sitting next to you :)  I was mostly paying attention to Teen Wolf playing while the 
                    other part of me was thinking 'I want to hold her hand!! I am so nervous!!'.  That night
                    we did indeed, hold hands.  Just about a week later, we kissed <3. I am thankful for
                    Sumos and Stiles Stilinski.  `"
        :itemQuote="`~I hope we kiss goodnight. It might just end my life~`"
        :quoteGiver="`I Don't Know How But They Found Me`"
        :itemIcon="'mdi-rice'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Pi Spy & Perfection`"
        :itemSubTitle="'March 2022'"
        :itemText="`Ah.. and along came the much-anticipated Pi day!  I had a plan in mind and
                    I was scared to death.  I knew you liked me, because I mean, we did kiss! 
                    But, nevertheless, I was still nervous.  I was going to ask you to be my
                    girlfriend.  I wanted to make it clever and out-of-the-box, you know, the
                    Wyatt way.  So what better than a Pi symbol dressed as a spy with a hat
                    and sunglasses on, right!  Yeah I am crazy LOL but that is just who I am.
                    Anyways, you said yes and so we were officially dating.  Joy filled my heart. 
                    All I could think was 'Wow. I, Wyatt Sillavan, am really dating *the* Faith Walker'.
                    It was perfection.
                    `"
        :itemQuote="`~ I think this is how love goes | Check yes or no ~`"
        :quoteGiver="'George Strait'"
        :itemIcon="'mdi-pi'"
        :photoSlides="piSpyAndPerfection"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Polaroids and Parents`"
        :itemSubTitle="'April 2022'"
        :itemText="`We took our first polaroid together (technically the last day of March, but
                    we will squeeze it in here hehe).  It was for our 'dress fancy to go out to eat'
                    day with my friends -- what a great time.  More photos were soon to follow!  One
                    of which came after meeting your mom for the first time!  She was such a delight
                    and I am glad she is the talker of the Walkers -- it really helped me keep talking
                    as well!  My future mother-in-law seemed great!  Other amazing photos include us
                    with Space tatyo and Lizzie as well as us with Matrix Man!
                    `"
        :itemQuote="`~He pulls out a faded polaroid, same table their first date~`"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-pi'"
        :photoSlides="polaroidsAndParents"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Birthdays & Boiled Potatoes`"
        :itemSubTitle="'May 2022'"
        :itemText="`Your birthday had approached and I was so excited for it!  You had told
                    me that you weren't huge on the whole birthday thing (your birthday specifically)
                    but I still wanted to celebrate and give you a birthday that you would love!  You
                    know me and my wild and elaborate plans...!  I started accumalting the items that
                    would be your present and it ended up being booked themed, so I wrapped them as your
                    favorite book -- Pride and Prejudice!!  It turned out just exemplary (almost as much
                    as those boiled potatoes!).  I also prepared a true-Faith dinner and some red velvet 
                    cupcakes with fun nerdy designs on them!  Then we went mini-golfing! You were happy 
                    and that was all I could ask for; that is all I ever want, is for you to be happy!  
                    My oh my I love this girl -- I am pretty sure this is the day I told you that I loved
                    you for the first time :)`"
        :itemQuote="`~ You must allow me to tell you how ardently I admire and love you ~`"
        :quoteGiver="'Mr. Darcy'"
        :itemIcon="'mdi-party-popper'"
        :photoSlides="birthdaysAndBoiledPotatoes"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Ties & Tiramisu`"
        :itemSubTitle="'Summer 2022'"
        :itemText="`My love for you grew stronger and stonger.  My love for bow ties also slowly increased.
                    The rest of the summer consisted of many dates and cuddles (you can't ask for much better
                    than that!).  We sported fancy attire -- I love being fancy with you Faith.  From fancy 
                    italian restaraunts to the bowling alley to anywhere in this world.  It doesn't matter where
                    we are at -- I will love you wholeheartedly.`"
        :itemQuote="`~ You time, you time, red wine. Sippin' in the moonlight
                       Your touch, your skin, your lips -- kissin' on me all night ~`"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-bow-tie'"
        :photoSlides="tiesAndTiramisu"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- Senior Year -->
    <v-card light flat class="yearCards">
      <v-container>
        <v-layout class="flexAndCenter">
          <strong class="mr-4">Senior Year</strong>
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Lakes & Laughter`"
        :itemSubTitle="'August 2022'"
        :itemText="`We began the new school year with trips to one of our 
                    favorite spots -- Lake Dardanelle.  A beautiful view 
                    so close to campus; it made (and still makes) a perfect place to just vibe
                    with you. Whether we were walking around the lake and taking silly photographs
                    or if we were just chilling in the car eating some Sonic 50 cent corn dogs,
                    it didn't matter, we had an amazing time.  That is one thing I love about you. We
                    can be doing literally anything and I'd be the happiest man alive just
                    because I was in your presence.  I was, and always will be, yours. I love
                    lakes and laughter with you.`"
        :itemQuote="`~If I lay here. If I just lay here. Would you lie with me and just forget the world?~`"
        :quoteGiver="'Snow Patrol'"
        :itemIcon="'mdi-waves'"
        :photoSlides="lakesAndLaughter"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Bueller & Brushes`"
        :itemSubTitle="'September 2022'"
        :itemText="`Our six month anniversary had arrived and I wanted to give you a memorable one!  
                    Just like all of my other plans, I start with something and it just kind of builds
                    on itself and BOOM I have an elaborate, and somehow themed, plan!  This plan ended
                    up being a Ferris Bueller/art theme.  I designed some custom Ferris Bueller combat
                    boots for you (I was incredibly excited for those) and I set us up an art station
                    so that we could create some art of our own (and oh boy we did!).  On top of that, I
                    tried to design the apartment as an 'art gallery', featuring our very own Starry Tayto.
                    I also had some pitifully attempted tiramisu that you still ate (because you love me!).
                    What a magnificent evening.  Bueller and brushes.`"
        :itemQuote="`~ Life moves pretty fast. If you don't stop
                       and look around once in a while, you could
                       miss it ~`"
        :quoteGiver="'Ferris Bueller'"
        :itemIcon="'mdi-brush'"
        :photoSlides="buellerAndBrushes"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Potter and Portrait Mode`"
        :itemSubTitle="'October 2022'"
        :itemText="`October was an excellent month!  We started it off from the get-go by watching your favorite
                    all time movie -- Pride and Prejudice!  I could then appreciate the amazing memes (Pikachu Mr. Darcy
                    and the HAND FLEX).  We also had some adventures -- the pumpkin patch and just exploring Fayettville!
                    Also, we got an ICONIC photo (I think iconic photos are kind of becoming our thing) of us at the Fall
                    photos in the alley!  Speaking of iconic photos, photographer Wyatt shined as I gave you a photoshoot in
                    the train station parking lot.  I love that you just go with my craziness.  More adventures include 
                    going to Marketplace grill and fancied up and DRESSING UP HAS RON AND HERMIONE.  Again, you support my
                    craziness (maybe I can convince you to be Ash and Pikachu!).  Potter and Portrait mode will most likely
                    stay as a constant within our relationship.`"
        :itemQuote="` ~You may only call me Mrs. Darcy when you are 
                       completely, and perfectly, and incandescently 
                       happy~`"
        :quoteGiver="'Mrs. Darcy'"
        :itemIcon="'mdi-deathly-hallows'"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Festive Faith & Fruits Basket`"
        :itemSubTitle="'December 2022'"
        :itemText="`December hath arrived!  You know how much I love all of
                    the festivities.  Festive Faith has made an appearance for TWO
                    Christmas parties so far--I am impressed.  I wrapped your present
                    wildly for the party (but did you expect any less?) -- maybe a bit
                    TOO wildly, however, because you were led to believe that I got you 
                    fruit snacks!!  It's okay, I take that as a compliment to my wrapping!!
                    We got some pretty bomb pictures as well, if you ask me!  We will be able
                    to cherish these moments for the rest of our lives, including this one right at 
                    this moment.`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-string-lights'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- And Beyond... -->
    <v-card light flat class="yearCards">
      <v-container>
        <v-layout class="flexAndCenter">
          <strong @click="goToFuture" class="mr-4">And Beyond...</strong>
        </v-layout>
      </v-container>
    </v-card>
    <div class="flexAndCenter ma-10">
      <v-img src="../assets/greenDots.png" max-width="100px"></v-img>
    </div>
    <!-- ______________ -->
  </div>
</template>

<script>
import TimeLineItem from "./TimeLineItem.vue";
export default {
  data: () => ({
    piSpyAndPerfection: [
      {
        id: 1,
        src: require("../assets/Slider Photos/JuniorYear/piSpy.png"),
      },
    ],
    polaroidsAndParents: [
      {
        id: 1,
        src: require("../assets/Slider Photos/JuniorYear/FirstPhoto.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/JuniorYear/FaithAndWyattCrackerBarrel.jpg"),
      },
      {
        id: 3,
        src: require("../assets/Slider Photos/JuniorYear/FaithWyattBKTayto.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/JuniorYear/FaithWyattMatrix.jpg"),
      },
      {
        id: 5,
        src: require("../assets/Slider Photos/JuniorYear/FaithMatrix.jpg"),
      },
    ],
    birthdaysAndBoiledPotatoes: [
      {
        id: 1,
        src: require("../assets/Slider Photos/Summer2022/Birthday/BirthdayConfetti.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/Summer2022/Birthday/SelfieWithMonkey.jpg"),
      },
      {
        id: 3,
        src: require("../assets/Slider Photos/Summer2022/Birthday/MiniGolf.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/Summer2022/Birthday/AlienCupcakes.jpg"),
      },
      {
        id: 5,
        src: require("../assets/Slider Photos/Summer2022/Birthday/BookEarrings.jpg"),
      },
      {
        id: 6,
        src: require("../assets/Slider Photos/Summer2022/Birthday/BirthdayPresent.jpg"),
      },
      {
        id: 7,
        src: require("../assets/Slider Photos/Summer2022/Birthday/BirthdayLights.jpg"),
      },
    ],
    tiesAndTiramisu: [
      {
        id: 1,
        src: require("../assets/Slider Photos/Summer2022/SummerItalianSelfie.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/Summer2022/Tiramisu.jpg"),
      },
      {
        id: 3,
        src: require("../assets/Slider Photos/Summer2022/FaithLivingRoom.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/Summer2022/FaithRedLobster.jpg"),
      },
      {
        id: 5,
        src: require("../assets/Slider Photos/Summer2022/FaithWithFlowers.jpg"),
      },
      {
        id: 6,
        src: require("../assets/Slider Photos/Summer2022/FatihBlueEarrings.jpg"),
      },
      {
        id: 7,
        src: require("../assets/Slider Photos/Summer2022/PizzaSelfie.jpg"),
      },
      {
        id: 8,
        src: require("../assets/Slider Photos/Summer2022/ArcBestWyattAndFaith.jpg"),
      },
      {
        id: 9,
        src: require("../assets/Slider Photos/Summer2022/SummerBowling.jpg"),
      },
    ],
    lakesAndLaughter: [
      {
        id: 1,
        src: require("../assets/Slider Photos/SeniorYear/Lakes/FaithAndWyattLakeSelfie.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/SeniorYear/Lakes/FaithSunglasses.jpg"),
      },
      {
        id: 3,
        src: require("../assets/Slider Photos/SeniorYear/Lakes/LakePolaroid.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/SeniorYear/Lakes/WyattHugsFaith.jpg"),
      },
      {
        id: 5,
        src: require("../assets/Slider Photos/SeniorYear/Lakes/FatihHugWyattLake.jpg"),
      },
    ],
    buellerAndBrushes: [
      {
        id: 1,
        src: require("../assets/Slider Photos/SeniorYear/Bueller/SixMonthSelfie.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/SeniorYear/Bueller/FaithAndWyattMoustache.jpg"),
      },
      {
        id: 3,
        src: require("../assets/Slider Photos/SeniorYear/Bueller/StarryTayto.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/SeniorYear/Bueller/TaytoPaintings.jpg"),
      },
    ],
  }),

  methods: {
    goToFuture() {
      console.log("Going into the future!");
      this.$router.push("/future");
    },
  },

  components: { TimeLineItem },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Niconne&display=swap"); /* This is neat! */

.flexAndCenter {
  display: flex;
  justify-content: center;
}
.yearCards {
  background-color: var(--v-background-base);
}

strong {
  font-family: "Niconne", cursive;
  color: #e0d6e9;
  text-shadow: 2px 2px 0px #957dad, 4px 4px 0px #0d805d, 6px 6px 0px #016126,
    8px 8px 0px #553c9a, 10px 10px 0px #5a1178;
  font-size: 45px;
  font-weight: bold;
}

#container {
  font-family: "Niconne", cursive !important;
}
</style>