document.getElementById('generateBtn').addEventListener('click', async () => {
  const generateBtn = document.getElementById('generateBtn');
  const linkContainer = document.getElementById('linkContainer');
  const trackingLink = document.getElementById('trackingLink');
  const copyBtn = document.getElementById('copyBtn');

  generateBtn.disabled = true;
  generateBtn.textContent = 'Generating...';

  try {
    const response = await fetch('/generate-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    trackingLink.href = data.link;
    trackingLink.textContent = data.link;
    linkContainer.classList.remove('hidden');
  } catch (error) {
    alert('Failed to generate link. Please try again.');
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-link"></i> Generate Link';
  }
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const trackingLink = document.getElementById('trackingLink').textContent;
  navigator.clipboard.writeText(trackingLink).then(() => {
    alert('Link copied to clipboard!');
  });
});
