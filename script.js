document.addEventListener('DOMContentLoaded', function() {
    var skillsBtn = document.getElementById('skillsbtn');

    skillsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth'});
    });
});

// About me Button
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
};

// Feedback Button
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap.show()
  })
};