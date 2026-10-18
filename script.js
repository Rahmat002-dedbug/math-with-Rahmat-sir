
const mathStudents = {
  "Maaz": { marks: 33, rank: 1, remarks: "Very Good", status: "Submitted" },
  "Abiwaqas": { marks: 32, rank: 2, remarks: "Excellent", status: "Submitted" },
  "Anab": { marks: 30, rank: 3, remarks: "Good", status: "Submitted" },
  "Salehin": { marks: 28, rank: 4, remarks: "Good", status: "Submitted" },
  "Noor Saba": { marks: 27, rank: 5, remarks: "Good", status: "Submitted" },
  "Arifa": { marks: 24, rank: 6, remarks: "Needs Improvement", status: "Submitted" },
  "Nematullah": { marks: 20, rank: 7, remarks: "Work Hard", status: "Submitted" },
  "Abuzar": { marks: 19, rank: 8, remarks: "Work Hard", status: "Submitted" },
  "Abou Saad": { marks: 17, rank: 9, remarks: "Practice More", status: "Submitted" },
  "Basit": { marks: 17, rank: 10, remarks: "Practice More", status: "Submitted" },
  "Shahanwaj": { marks: 17, rank: 11, remarks: "Practice More", status: "Submitted" },
  "Huzaifa": { marks: 8, rank: 12, remarks: "Needs Extra Support", status: "Submitted" },
  "Amzad": { marks: "--", rank: "--", remarks: "Copy not submitted on time", status: "Late Submission" },
  "Abou Saleh": { marks: "--", rank: "--", remarks: "Copy not submitted on time", status: "Late Submission" },
  "Akib": { marks: "--", rank: "--", remarks: "Didn't Attempt", status: "Didn't Attempt" },
  "Afreen": { marks: "--", rank: "--", remarks: "Didn't Attempt", status: "Didn't Attempt" },
  "Sara": { marks: "--", rank: "--", remarks: "Didn't Attempt", status: "Didn't Attempt" },
  "Zoya": { marks: "--", rank: "--", remarks: "Didn't Attempt", status: "Didn't Attempt" },
  "Ayan": { marks: "--", rank: "--", remarks: "Didn't Attempt", status: "Didn't Attempt" },
  "Rashid": { marks: "--", rank: "--", remarks: "Absent", status: "Absent" },
  "Nafish": { marks: "--", rank: "--", remarks: "Absent", status: "Absent" }
};

const englishStudents = {
  "Arifa Rahmani": { marks: 49, rank: 1, grade: "Excellent", remarks: "Outstanding performance! Keep it up." },
  "Md Abuzar": { marks: 45, rank: 2, grade: "Excellent", remarks: "Excellent work. Maintain this level." },
  "Nafish": { marks: 40, rank: 3, grade: "Very Good", remarks: "Very good performance. Keep practising." },
  "Md Maaz": { marks: 40, rank: 3, grade: "Very Good", remarks: "Very good performance. Well done." },
  "Md Amir": { marks: 38, rank: 5, grade: "Very Good", remarks: "Good effort. You can do even better." },
  "Md Salehin": { marks: 37, rank: 6, grade: "Very Good", remarks: "Very good. Keep it up." },
  "Md Amzad": { marks: 36, rank: 7, grade: "Very Good", remarks: "Good performance. Stay consistent." },
  "Abou Saad": { marks: 35, rank: 8, grade: "Very Good", remarks: "Good work. Keep improving." },
  "Md Anab": { marks: 34, rank: 9, grade: "Good", remarks: "Good effort. Revise vocabulary regularly." },
  "Abou Saleh": { marks: 30, rank: 10, grade: "Good", remarks: "Good performance. Practise more." },
  "Md Rashid": { marks: 28, rank: 11, grade: "Good", remarks: "Satisfactory. Work harder." },
  "Afrin": { marks: 28, rank: 11, grade: "Good", remarks: "Satisfactory. Keep practising." },
  "Noor Saba": { marks: 27, rank: 13, grade: "Good", remarks: "Satisfactory. Try to improve." },
  "Abdul Basit": { marks: 26, rank: 14, grade: "Good", remarks: "Satisfactory. More practice is needed." },
  "Md Nematullah": { marks: 25, rank: 15, grade: "Good", remarks: "Revise words daily to improve." },
  "Md Abiwaqas": { marks: 25, rank: 15, grade: "Good", remarks: "Practise regularly to improve." },
  "Md Akib": { marks: 23, rank: 17, grade: "Average", remarks: "You can do better. Focus more." },
  "Ruby Parween": { marks: 22, rank: 18, grade: "Average", remarks: "Keep practising and revising." },
  "Md Huzaifa": { marks: 17, rank: 19, grade: "Below Average", remarks: "Revise carefully. Ask for help when needed." },
  "Md Sahanwaj": { marks: 12, rank: 20, grade: "Below Average", remarks: "Keep trying. Practise a few words every day." },
  "Ayan Ali": { marks: "--", rank: "--", grade: "DNA", remarks: "Please attempt the next test." },
  "Sara Ali": { marks: "--", rank: "--", grade: "DNA", remarks: "Please attempt the next test." },
  "Zoya Ali": { marks: "--", rank: "--", grade: "DNA", remarks: "Please attempt the next test." }
};

function searchResult() {
  const nameInput = document.getElementById("name");
  const result = document.getElementById("result");
  const selector = document.getElementById("testType");

  const name = nameInput.value.trim().toLowerCase();
  const test = selector ? selector.value : "math";
  const students = test === "english" ? englishStudents : mathStudents;

  const key = Object.keys(students).find(
    studentName => studentName.toLowerCase() === name
  );

  if (!name) {
    result.innerHTML = "<h3>Please enter a student name.</h3>";
    return;
  }

  if (!key) {
    result.innerHTML = "<h3>Student not found in this test.</h3>";
    return;
  }

  const s = students[key];

  if (test === "english") {
    const percentage = typeof s.marks === "number"
      ? Math.round((s.marks / 50) * 100)
      : "--";

    result.innerHTML = `
      <div class="scorecard">
        <h2>English Vocabulary Test</h2>
        <img src="${key === 'Arifa Rahmani' ? 'Arifa.png' : key + '.png'}" alt="${key}" class="student-photo">
        <p><b>Marks:</b> ${s.marks}${typeof s.marks === "number" ? " / 50" : ""}</p>
        <p><b>Rank:</b> ${s.rank}</p>
        <p><b>Percentage:</b> ${percentage}${percentage !== "--" ? "%" : ""}</p>
        <p><b>Grade:</b> ${s.grade}</p>
        <p><b>Remarks:</b> ${s.remarks}</p>
        <button onclick="window.print()">Print Scorecard</button>
      </div>`;
  } else {
    result.innerHTML = `
      <div class="scorecard">
        <h2>Math Test Result</h2>
  class="student-photo" style="width:50px;height:40px;max-width:50px;object-fit:cover;display:block;"      
<h3>${key}</h3>
        <p><b>Marks:</b> ${s.marks}${typeof s.marks === "number" ? " / 50" : ""}</p>
        <p><b>Rank:</b> ${s.rank}</p>
        <p><b>Status:</b> ${s.status}</p>
        <p><b>Remarks:</b> ${s.remarks}</p>
        <button onclick="window.print()">Print Scorecard</button>
      </div>`;
  }
}
