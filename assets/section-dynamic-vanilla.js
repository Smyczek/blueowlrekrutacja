console.log('from section-dynamic-vanilla.js');
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.dynamic-section__container').forEach(container => {
        const tabButtons = Array.from(container.querySelectorAll('.tab-item__button'));
        const tabItem = Array.from(container.querySelectorAll('.dynamic-section__tab-item'));

        if (!tabButtons.length || !tabItem.length) return;

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active class and set aria-selected to false for all buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                    btn.setAttribute("aria-selected", "false");
                });

                // Add active class and set aria-selected to true for the clicked button
                button.classList.add("active");
                button.setAttribute("aria-selected", "true");

                // Get the target item
                const targetId = button.getAttribute("aria-controls");

                // Hide all tab items
                tabItem.forEach(item => item.classList.remove("active"));

                // Show the target tab item
                const targetItem = container.querySelector(`#${targetId}`);
                if (targetItem) {
                    targetItem.classList.add("active");
                }
            });
        });
    });
});