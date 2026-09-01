import { useEffect } from "react";

const useReveal = () => {

    useEffect(() => {

        const elements =
            document.querySelectorAll(".reveal");

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        elements.forEach((element) => {
            observer.observe(element);
        });


        return () => {
            observer.disconnect();
        };

    }, []);

};

export default useReveal;