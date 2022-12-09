<template>
  <div id="container">

    <!-- Freshman Year -->
    <v-card light flat>
      <v-container>
        <v-layout align-center>
          <strong class="display-1 font-weight-regular mr-4"
            >Freshman Year</strong
          >
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
        :itemQuote="'~ Falling for a Stranger ~'"
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
                    quick Instagram search and BOOM!  Man, she is nice, I want her to 
                    be my friend.`"
        :itemQuote="'~ *insert first message here* ~'"
        :itemIcon="'mdi-music-note-eighth'"
      />
      <time-line-item
        :titleBarColor="'green lighten-1'"
        :itemTitle="`A's & Applause`"
        :itemSubTitle="'October 2019'"
        :itemText="`We gained some friendship and both agreed that the first Dr. Finan
                    test was just NOT IT.  The second test rolls around and who kills it
                    out of the room of mostly sophomores?  The two freshman.  We received 
                    A's and applause.  I love how smart she is.`"
        :itemQuote="'~ *insert first message here* ~'"
        :itemIcon="'mdi-hand-clap'"
      />
    </v-timeline>
    <!-- ______________ -->


    <!-- Sophomore Year -->
    <v-card light flat>
      <v-container>
        <v-layout align-center>
          <strong class="display-1 font-weight-regular mr-4"
            >Sophomore Year</strong
          >
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'blue lighten-1'"
        :itemTitle="`Gloom & Gauss' Law `"
        :itemText="`Summer 2021`"
        :itemQuote="`~ You were always on my mind ~`"
        :itemIcon="'mdi-emoticon-sad'"
      />
      <time-line-item
        :titleBarColor="'blue lighten-1'"
        :itemTitle="`Praying & Podcasts `"
        :itemText="`Summer 2021`"
        :itemQuote="`~ Your were always on my mind ~`"
        :itemIcon="'mdi-podcast'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- Junior Year -->
    <v-card light flat>
      <v-container>
        <v-layout align-center>
          <strong class="display-1 font-weight-regular mr-4"
            >Junior Year</strong
          >
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Zoopocalypse & a Zephyr`"
        :itemSubTitle="'August 2021'"
        :itemText="``"
        :itemQuote="`~  ~`"
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
        :itemTitle="`Sonic & Space Tayto`"
        :itemSubTitle="'February 2022'"
        :itemText="`Treked through icy roads on bike for mozzarella sticks. Same day as space tayto shipped`"
        :itemQuote="`~ Nobody in their right mind would've left her ~`"
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
        :itemQuote="`~ I hope we kiss goodnight | It might just end my life ~`"
        :itemIcon="'mdi-rice'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Pi Spy & Perfection`"
        :itemSubTitle="'March 2022'"
        :itemText="``"
        :itemQuote="`~ Nobody in their right mind would've left her ~`"
        :itemIcon="'mdi-pi'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Boiled Potatoes and Birthdays`"
        :itemSubTitle="'Summer 2022'"
        :itemText="``"
        :itemQuote="`~ Nobody in their right mind would've left her ~`"
        :itemIcon="'mdi-party-popper'"
      />
      <time-line-item
        :titleBarColor="'purple lighten-1'"
        :itemTitle="`Ties and Tiramisu`"
        :itemSubTitle="'Summer 2022'"
        :itemText="``"
        :itemQuote="`~ Nobody in their right mind would've left her ~`"
        :itemIcon="'mdi-bow-tie'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- Senior Year -->
    <v-card light flat>
      <v-container>
        <v-layout align-center>
          <strong class="display-1 font-weight-regular mr-4"
            >Senior Year</strong
          >
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Lakes & Love`"
        :itemText="`August 2022`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-waves'"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Bueller & Brushes`"
        :itemText="`September 2022`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-brush'"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Hand Flex & Harry Potter`"
        :itemText="`October 2022`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-deathly-hallows'"
      />
      <time-line-item
        :titleBarColor="'orange'"
        :itemTitle="`Festive Faith & Fruits Basket`"
        :itemText="`December 2022`"
        :itemQuote="`~  ~`"
        :itemIcon="'mdi-string-lights'"
      />
    </v-timeline>
    <!-- ______________ -->

    <!-- And Beyond... -->
    <v-card light flat>
      <v-container>
        <v-layout align-center>
          <strong class="display-1 font-weight-regular mr-4"
            >And Beyond...</strong
          >
        </v-layout>
      </v-container>
    </v-card>
    <v-timeline dense style="padding-right: 24px">
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Developing & Dancing`"
        :itemText="``"
        :itemQuote="`~ Baby, why don't we just dance? ~`"
        :itemIcon="'mdi-code-tags'"
      />
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Kitties & Kissing`"
        :itemText="``"
        :itemQuote="`~ Are you going to kiss me or not? ~`"
        :itemIcon="'mdi-emoticon-kiss'"
      />
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Mrs. Sillavan & Me`"
        :itemText="``"
        :itemQuote="`~ If you need a diamond ring down on one knee kinda moment, baby I'm on it ~`"
        :itemIcon="'mdi-ring'"
      />
    </v-timeline>
    <!-- ______________ -->

  </div>
</template>

<script>
import TimeLineItem from "./TimeLineItem.vue";
export default {
  components: { TimeLineItem },
};
</script>

<style scoped>
</style>