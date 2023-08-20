function getSeason(sportName) {
  let season;
  switch (sportName) {
    case "baseball":
      season = "season1";
      break;
    case "basketball":
      season = "season1";
      break;
    case "badminton":
      season = "season1";
      break;
    case "soccer":
      season = "season2";
      break;
    case "swimming":
      season = "season2";
      break;
    case "pingpong":
      season = "season3";
      break;
    case "tennis":
      season = "season3";
      break;
    case "volleyball":
      season = "season3";
      break;

    default:
      console.log("Error, type the correct sport name");
      season = "Error, type the correct sport name";
      break;
  }

  return season;
}
