

1. How do we measure the length of the critical rendering path? (10 pts)

  i.  The number of server round trips your page must do in order to fully load and render
  ii.  The number of actions the browser must take (eg run js, build cssom, build dom, etc) in order to fully load and render your page
  iii.  By counting the number of all external resources that must be loaded
  iv.  By counting the number of render-blocking external resources that must be loaded

Answer(i)


2. What are the events in the Timeline pane which show the DOM being built, the CSSOM being built, and the render tree being built? (10 pts)

  i.  Parse HTML, Parse CSS, Layout
  ii.  Parse HTML, Recalculate Style, Layout
  iii.  Parse HTML, Recalculate Style, Paint

Answer(i)


3. What is the render tree? (10 pts)

Answer
The render tree is the result of union the DOM and CSSOM trees.


4. What are three things you can do in order to speed up a website's load time? (10 pts)
minimize use of render blocking resources(CSS)
Answer
1-use media queries on <link> to unblock rendering
2-inline css
3-defer javascript execution
4-use async attribute on <script>


5. What is the name of the Google tool you can use to see a list of things you can do to improve your page's load speed? (10 pts)

Answer
PageSpeed Insights
https://developers.google.com/speed/pagespeed/insights/?hl=en

6. What is the purpose of including multiple <source> elements within a single <video> element?
Answer
Make the video compatible with all browsers.
