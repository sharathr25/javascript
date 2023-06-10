function debounce (fun, delay = 3000) {
  let timerId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fun.apply(context, args)
    }, [delay])
  }
}

function throttle (fun, delay = 3000) {
  let fired = false
  return function () {
    if (fired) return
    const context = this
    const args = arguments
    fun.apply(context, args)
    fired = true
    setTimeout(() => {
      fired = false
    }, [delay])
  }
}
