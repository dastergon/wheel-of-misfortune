# Wheel of Misfortune
**Wheel of Misfortune** is a game that aims to build confidence in on-call engineers via simulated outage scenarios.
With the game, you practice problem debugging under stress, understanding the incident management protocol,
and effective communication with other engineers of your team and organization.
It is a great way to train new hires, interns, and seasoned engineers to become well-rounded on-call engineers.

The game is inspired by the [Site Reliability Engineering](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg) book.

[Demo website](https://dastergon.gr/wheel-of-misfortune)

## Instructions
### Terminology

*   **Scenario**: A past or fictional incident case.
*   **Game Master**: The host-coordinator of the session.
*   **Volunteer**: The trainee on-call engineer.

Feel free to fork the [repository](https://github.com/dastergon/wheel-of-misfortune) or [download](https://github.com/dastergon/wheel-of-misfortune/releases) the stable release.
Copy the [general\_incidents.json.sample](incidents/general\_incidents.json.sample) file to *general_incidents.json*, inside the [incidents/](incidents/) directory, and insert your incident scenarios into it.

To run the game locally on your computer please navigate the the main directory of the downloaded project i.e. `wheel-of-misfortune-5.0/` and from here start a web server i.e. `python -m SimpleHTTPServer` after that open the http://localhost:8000 using your web browser.

The file has the following format:
- **ID**: the unique ID of the outage (you can just auto-increment).
- **title**: the title of the incident.
- **scenario**: the description of the incident. It is useful to include URLs from monitoring systems, dashboards, time-series databases and playbooks.
- **inkstory**: the path to an [Ink](https://www.inklestudios.com/ink/) story file in JSON format.

You can also use [general\_incidents.jsonnet](incidents/general_incidents.jsonnet.sample) as an example, in case you want to generate your incident scenarios using [Jsonnet](https://jsonnet.org/).

### Ink
[Ink](https://github.com/inkle/ink) is a scripting language for writing interactive narrative stories. It enables us to write interactive incident response narratives for team or individual trainings. You can use [Inky](https://github.com/inkle/inky) to write an interactive narrative for an incident and then export the story as JSON. Then, you can store the story file inside the [incidents/](incidents/) folder and associate the Ink story file with an Incident scenario using the **inkstory** key. You can read an example incident narrative [here](https://github.com/dastergon/wheel-of-misfortune/tree/master/incidents/redis-story.json).

### Role Playing
#### Game Master

1.  Choose a volunteer to be the primary on-call engineer in front of the group.
2.  Find a balance between the volunteer's experience and the incident's difficulty.
3.  Assist volunteer by answering questions that may arise in each theoretical action or dashboard observation.
  * Engage with the rest of the team and ask for different ways to debug the problem following the volunteer's explanation.
  * Team members may be made available over time for assistance in various topics.
5.  At the end, have a debrief on the learnings of the session.


#### Volunteer

1.  Spin the wheel and attempt to fix the theoretical outage scenario.
2.  Explain to the Game Master and the rest of the group what actions you would take (lookup queries, checks in dashboards, etc.) to find the root causes, and eventually solve the incident.
3.  Always keep an eye on the time, since it is a simulated incident response scenario and not a routine troubleshooting process. During a real incident, you might have an SLA or SLO breach and therefore you should take timing into account.
4.  Engage with the rest of the group. Keep them in the loop. Ask questions to different members depending on their expertise.

Most importantly, **have fun!**

You can [read](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg) a comprehensive example on how to conduct the exercise in the Google SRE book.


### Resources

*   [Disaster Role Playing](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg)
*   [Managing Misfortune for Best Results](https://www.usenix.org/conference/srecon18europe/presentation/barry)
*   [Postmortem Culture: Learning from Failure](https://landing.google.com/sre/book/chapters/postmortem-culture.html)
*   [Postmortem Templates](https://github.com/dastergon/postmortem-templates)
*   [Postmortems Metadata Index](https://postmortems.app)
*   [Site Reliability Engineering Resources](https://github.com/dastergon/awesome-sre)
