export function displayCheckedInStatus(dateChecked: string) {
  if (dateChecked === "") {
    return "Not checked in";
  } else {
    return "Checked in";
  }
}
