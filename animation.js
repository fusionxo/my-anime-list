const animeList = [
  "Chainsaw Man",
  "More than a married couple, but not lovers.",
  "Tomodachi Game",
  "Scum's Wish",
  "Rent-a-Girlfriend 2nd Season",
  "High School DxD New",
  "Jujutsu Kaisen 0",
  "Aharen-san wa Hakarenai",
  "Vermeil in Gold",
  "High School DxD",
  "Classroom of the Elite",
  "Classroom of the Elite II",
  "Harem in the Labyrinth of Another World (Uncensored)",
  "My Stepmom's Daughter Is My Ex",
  "TONIKAWA: Over The Moon For You",
  "Into the Forest of Fireflies' Light",
  "5 Centimeters Per Second",
  "I Want To Eat Your Pancreas",
  "A Silent Voice",
  "Your Name.",
  "Weathering with You",
  "A Whisker Away",
  "DARLING in the FRANXX",
  "Komi Can't Communicate Season 2",
  "Komi Can't Communicate",
  "Horimiya",
  "Rascal Does Not Dream of Bunny Girl Senpai",
  "Attack on Titan: The Final Season Part 2",
  "Attack on Titan: The Final Season",
  "Attack on Titan Season 3 Part 2",
  "Attack on Titan Season 3",
  "Attack on Titan Season 2",
  "Attack on Titan",
  "Jujutsu Kaisen",
  "Hyouka",
  "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
  "Loving Yamada at Lv999",
  "Tonikawa: Over The Moon For You: 2nd Season",
  "Hell's Paradise",
  "The Legendary Hero Is Dead!",
  "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
  "The Devil is a Part-Timer!",
  "Wise Man's Grandchild",
  "Summer Ghost",
  "The Disastrous Life of Saiki K. 2",
  "The Disastrous Life of Saiki K.",
  "Re:Zero - Starting Life in Another World 2nd Season (Part 2)",
  "Re:Zero - Starting Life in Another World",
  "Re:Zero - Starting Life in Another World 2nd Season",
  "Teasing Master Takagi-san",
  "Tokyo Revengers",
  "Tokyo Revengers: Christmas Showdown",
  "Tokyo Ghoul",
  "The Angel Next Door Spoils Me Rotten",
  "Don't Toy with Me, Miss Nagatoro",
  "Tomo-chan Is a Girl!",
  "ReLIFE: Kanketsu-hen",
  "ReLIFE",
  "The Daily Life of the Immortal King 3",
  "The Daily Life of the Immortal King 2",
  "The Daily Life of the Immortal King",
  "The Quintessential Quintuplets: The Movie",
  "Masamune-kun's Revenge",
  "Ao Haru Ride OVA",
  "Blue Spring Ride (Ao Haru Ride)",
  "The Quintessential Quintuplets",
  "Beast Tamer",
  "The Garden of Words",
  "Death Note",
  "Uzaki-chan Wants to Hang Out!",
  "Uzaki-chan wa Asobitai! 2nd Season",
  "Spy x Family",
  "Spy x Family Part 2",
  "My Dress-Up Darling",
  "Love, Chunibyo & Other Delusions!",
  "Love, Chunibyo & Other Delusions! 2nd Season: Heart Throb",
  "The Eminence in Shadow",
  "Call of the Night",
  "Death March to the Parallel World Rhapsody",
  "The Misfit of Demon King Academy",
  "Didn't I Say to Make My Abilities Average in the Next Life?!",
  "How Not to Summon a Demon Lord",
  "Mashle: Magic and Muscles",
  "My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World",
  "In Another World With My Smartphone",
  "The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far",
  "Overlord",
  "Overlord II",
  "Overlord III",
  "Overlord IV",
  "Charlotte",
  "Date A Live",
  "Date A Live II",
  "Date A Live III",
  "Date A Live IV",
  "Lycoris Recoil",
  "Engage Kiss",
  "Shikimori's Not Just a Cutie",
  "Over the Sky",
  "Aharen-san wa Hakarenai",
  "Kakegurui",
  "Rent-a-Girlfriend",
  "The Devil is a Part-Timer! Season 2",
  "In Another World With My Smartphone 2",
  "The Reincarnation of the Strongest Exorcist in Another World",
  "Nande Koko ni Sensei ga!?",
  "Seirei Gensouki: Spirit Chronicles",
  "The Rising of the Shield Hero",
  "The Rising of the Shield Hero 2",
  "Am I Actually the Strongest?",
  "Skeleton Knight in Another World",
  "Horimiya: The Missing Pieces",
  "Mushoku Tensei: Jobless Reincarnation",
  "Mushoku Tensei: Jobless Reincarnation Season 2",
  "The Misfit of Demon King Academy Season 2",
  "Masamune-kun's Revenge R",
  "The Dreaming Boy is a Realist",
  "The Master of Ragnarök & Blesser of Einherjar",
  "That Time I Got Reincarnated as a Slime",
  "That Time I Got Reincarnated as a Slime season 2 part 1",
  "That Time I Got Reincarnated as a Slime season 2 part 2",
  "The Fruit of Evolution: Before I Knew It, My Life Had It Made",
  "The Fruit of Evolution: Before I Knew It, My Life Had It Made Season 2",
  "The Faraway Paladin",
  "Suzume",
  "TONIKAWA: Over The Moon For You ~High School Days~",
  "TONIKAWA: Over The Moon For You Season 2",
  "I'm standing on 1,000,000 lives",
  "I'm standing on 1,000,000 lives Season 2",
  "Bleach",
  "Black Summoner",
  "Munou na Nana",
  "One Punch Man",
  "One Punch Man Season 2",
  "Arifureta: From Commonplace to World's Strongest",
  "The Hidden Dungeon Only I Can Enter",
  "I'm Quitting Heroing",
  "The Iceblade Sorcerer Shall Rule the World",
  "The Irregular at Magic High School",
  "Cautious Hero: The Hero Is Overpowered but Overly Cautious",
  "The Greatest Demon Lord Is Reborn as a Typical Nobody",
  "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
  "Dead Mount Death Play",
  "The Tunnel to Summer, the Exit of Goodbye"
];



const animeListContainer = document.getElementById("anime-list");

animeList.forEach((anime, index) => {
  const listItem = document.createElement("li");
  const number = document.createElement("span");
  number.classList.add("number");
  number.textContent = `${(index + 1).toString().padStart(2, "0")} `;
  listItem.appendChild(number);

  const animeTitle = document.createElement("span");
  animeTitle.textContent = anime;
  listItem.appendChild(animeTitle);

  const animeInfo = document.createElement("span");
  animeInfo.classList.add("anime-info");
  animeInfo.textContent = `Information about ${anime}`;
  listItem.appendChild(animeInfo);

  animeTitle.addEventListener("click", function() {
    animeInfo.classList.toggle("show-info");
  });

  animeInfo.addEventListener("click", function() {
    const searchQuery = anime.replace(/\s/g, "+");
    const searchURL = `https://myanimelist.net/search/all?q=${searchQuery}`;
    window.open(searchURL, "_blank");
  });

  animeListContainer.appendChild(listItem);
});




document.addEventListener("DOMContentLoaded", function() {
  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  document.body.appendChild(dot);

  document.addEventListener("mousemove", function(event) {
    dot.style.left = event.clientX + "px";
    dot.style.top = event.clientY + "px";

    const animeTitles = document.querySelectorAll("li");
    animeTitles.forEach(title => {
      title.addEventListener("mouseenter", function() {
        dot.classList.add("cursor-dot-hover"); // Add a class to change the dot color
      });
      title.addEventListener("mouseleave", function() {
        dot.classList.remove("cursor-dot-hover"); // Remove the class to revert to original color
      });
    });
  });
});

