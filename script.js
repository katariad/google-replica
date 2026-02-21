const appList = [
  {
    appname: " Search",
    link: "https://www.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
  },
  {
    appname: "Gmail",
    link: "https://mail.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png",
  },
  {
    appname: "Drive",
    link: "https://drive.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/drive_48dp.png",
  },
  {
    appname: " Docs",
    link: "https://docs.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/docs_48dp.png",
  },
  {
    appname: "Sheets",
    link: "https://sheets.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png",
  },
  {
    appname: "Slides",
    link: "https://slides.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/slides_48dp.png",
  },
  {
    appname: "Forms",
    link: "https://forms.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/forms_48dp.png",
  },
  {
    appname: "Calendar",
    link: "https://calendar.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png",
  },
  {
    appname: "Meet",
    link: "https://meet.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/meet_48dp.png",
  },
  {
    appname: "Google Chat",
    link: "https://chat.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/chat_48dp.png",
  },
  {
    appname: "Google Maps",
    link: "https://maps.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/maps_48dp.png",
  },
  {
    appname: "YouTube",
    link: "https://www.youtube.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/youtube_48dp.png",
  },
  {
    appname: "YouTube Music",
    link: "https://music.youtube.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/youtube_music_48dp.png",
  },
  {
    appname: "Google Photos",
    link: "https://photos.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/photos_48dp.png",
  },
  {
    appname: "Google Keep",
    link: "https://keep.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/keep_48dp.png",
  },
  {
    appname: "Google Tasks",
    link: "https://tasks.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/tasks_48dp.png",
  },
  {
    appname: "Google News",
    link: "https://news.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/news_48dp.png",
  },
  {
    appname: "Google Translate",
    link: "https://translate.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/translate_48dp.png",
  },
  {
    appname: "Google Chrome",
    link: "https://www.google.com/chrome/",
    icon: "https://www.gstatic.com/images/branding/product/1x/chrome_48dp.png",
  },
  {
    appname: "Google Play Store",
    link: "https://play.google.com/store",
    icon: "https://www.gstatic.com/images/branding/product/1x/play_store_48dp.png",
  },
  {
    appname: "Google Classroom",
    link: "https://classroom.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/classroom_48dp.png",
  },

  {
    appname: "Google Analytics",
    link: "https://analytics.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/analytics_48dp.png",
  },
  {
    appname: "Google Ads",
    link: "https://ads.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/google_ads_48dp.png",
  },
  {
    appname: "Google Cloud Console",
    link: "https://console.cloud.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png",
  },
  {
    appname: "Google Firebase",
    link: "https://firebase.google.com/",
    icon: "https://www.gstatic.com/images/branding/product/1x/firebase_48dp.png",
  },
  {
    appname: "Google Domains",
    link: "https://domains.google/",
    icon: "https://www.gstatic.com/images/branding/product/1x/domains_48dp.png",
  },
  {
    appname: "Google My Business",
    link: "https://www.google.com/business/",
    icon: "https://www.gstatic.com/images/branding/product/1x/business_48dp.png",
  },
];

const maindiv = document.getElementById("flistdiv");

appList.slice(0, 6).forEach((app, i) => {
  const div = document.createElement("div");
  div.className = "singular_list";
  div.id = `singularlist${i}`;

  const img = document.createElement("img");
  img.src = app.icon;
  img.alt = app.appname;
  img.title = app.appname;

  const p = document.createElement("p");
  p.innerHTML = app.appname;

  div.appendChild(img);
  div.appendChild(p);
  maindiv.appendChild(div);
});

const main2div = document.getElementById("Slistdiv");

appList.slice(6, -1).forEach((app, i) => {
  const div = document.createElement("div");
  div.className = "singular_list";
  div.id = `singularlist${i}`;

  const img = document.createElement("img");
  img.src = app.icon;
  img.alt = app.appname;
  img.title = app.appname;

  div.appendChild(img);
  main2div.appendChild(div);
});

const appbtn = document.getElementById("apps_layout");

const iconbox = document.getElementById("iconLayout_div0");

document.addEventListener("click", (e) => {
  if (!iconbox.contains(e.target) && !appbtn.contains(e.target)) {
    iconbox.style.display = "none";
  }
});

appbtn.addEventListener("click", () => {
  iconbox.style.display = iconbox.style.display === "block" ? "none" : "block";
});

// suggestioj code
const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

document.addEventListener("click", (e) => {
  if (!suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});

let debounceTimer;

input.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const query = input.value.trim();

  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  debounceTimer = setTimeout(() => {
    fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`)
      .then((res) => res.json())
      .then((data) => {
        const suggestions = data[1]; // ✅ THIS IS IMPORTANT
        showSuggestions(suggestions);
      })
      .catch((err) => console.error(err));
  }, 300);
});

function showSuggestions(list) {
  suggestionsBox.innerHTML = "";

  if (!list.length) {
    suggestionsBox.style.display = "none";
    return;
  }

  list.slice(0, 8).forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;

    // 🔥 MOBILE SAFE
    li.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      input.value = text;
      suggestionsBox.style.display = "none";
      form.submit();
    });

    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Hide suggestions safely (mobile-friendly)
document.addEventListener("pointerdown", (e) => {
  if (!e.target.closest(".search-form")) {
    suggestionsBox.style.display = "none";
  }
});

// search with mic

const micBtn = document.getElementById("voice-search-btn");
const form = document.getElementById("google-search-form");

// Check browser support
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  micBtn.style.display = "none";
  console.warn("Speech recognition not supported");
} else {
  const recognition = new SpeechRecognition();

  recognition.lang = "en-US"; // change to 'hi-IN' for Hindi
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {
    recognition.start();
    micBtn.textContent = "🎙️"; // listening indicator
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    input.value = transcript;
    form.submit(); // 🔥 Google-style auto search
  };

  recognition.onerror = () => {
    micBtn.textContent = "🎤";
  };

  recognition.onend = () => {
    micBtn.textContent = "🎤";
  };
}

//  trending seraches
function positionSuggestions() {
  const rect = document.getElementById("searchInput").getBoundingClientRect();
  const box = document.getElementById("suggestions");

  box.style.top = rect.bottom + 5 + "px";
  box.style.left = rect.left + "px";
  box.style.width = rect.width + "px";
}
input.addEventListener("focus", positionSuggestions);
window.addEventListener("resize", positionSuggestions);
