var slideshow = remark.create({
  ratio: "16:10",
  navigation: {
    scroll: false,
    touch: true,
    click: false
  },
  slideNumberFormat: function(current, total) {
    return current + " (" + total + ")"
  },
  countIncrementalSlides: false,
  highlightStyle: "tk-zenburn",
  highlightLines: true
})
