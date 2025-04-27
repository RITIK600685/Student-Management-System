async function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    await fetch('/students/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age })
    });

    fetchStudents();
}

async function fetchStudents() {
    const response = await fetch('/students/list');
    const students = await response.json();
    document.getElementById('studentList').innerHTML = students.map(s => `<li>${s.name} - ${s.age} years</li>`).join('');
}

fetchStudents();