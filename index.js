
class AnchorHandler {
  constructor() {}

  navigate(event, location) {
    event.preventDefault();
    window.location.replace(location);
    return false;
  }
}

const anchor = new AnchorHandler();
