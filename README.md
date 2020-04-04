# Wheel of Misfortune
**Wheel of Misfortune** is a game that aims to build confidence to oncall engineers via simulated outage scenarios. 
With the game, you practice problem debugging under stress, the understanding of the incident management protocol, 
and effective communication with other engineers of your team and organization. 
It is a great way to train new hires, interns, and seasoned engineers to become well-rounded oncall engineers.

The game is inspired by the [Site Reliability Engineering](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg) book.

The demo website is available at: https://dastergon.gr/wheel-of-misfortune

## Instructions
### Terminology

*   **Scenario**: A past or fictional incident case.
*   **Game Master**: The host-coordinator of the session.
*   **Volunteer**: The trainee oncall engineer.

Feel free to fork the [repository](https://github.com/dastergon/wheel-of-misfortune) or [download](https://github.com/dastergon/wheel-of-misfortune/releases) the stable release.  
Insert your incident scenarios into the [general\_incidents.json](https://github.com/dastergon/wheel-of-misfortune/blob/master/incidents/general_incidents.json) file inside the [incidents/](https://github.com/dastergon/wheel-of-misfortune/tree/master/incidents) folder.

The file has the following format:
- ID: the unique ID of the outage (you can just auto-increment).
- title: the title of the incident.
- scenario: the description of the incident. It is useful to include URLs from monitoring systems, dashboards, time-series databases and playbooks.
- difficulty: the difficulty level of the outage. (Not yet supported)

However, you can also use [general\_incidents.jsonnet](https://github.com/dastergon/wheel-of-misfortune/blob/master/incidents/general_incidents.jsonnet) as an example, in case you want to generate your incident scenarios using Jsonnet.

### Game Master

1.  Choose a volunteer to be the primary oncall engineer in front of the group.
2.  Find a balance between volunteer's experience and incident's difficulty.
3.  Assist volunteer by answering questions that may arise in each theoretical action or dashboard observation.
  * Engage with the rest of the team and ask for different ways to debug the problem following the volunteer's explanation.
  * Team members may be made available over time for assistance in various topics.
5.  At the end, have a debrief on the learnings of the session.

#### Volunteer

1.  Spin the wheel and attempt to fix the theoretical outage scenario.
2.  Explain to the Game Master and the rest of the group what actions you would take (lookup queries, checks in dashboards, etc.) to find the root causes, and eventually solve the incident.
3.  Always keep an eye on the time, since it is simulated incident response scenario and not a routine troubleshooting process. During a real incident you might have an SLA or SLO breach and therefore you should take timing into account.
4.  Engage with the rest of the group. Keep them in the loop. Ask questions to different members depending on their expertise.

Most importantly, **have fun!**

You can [read](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg) a comprehensive example on how to conduct the exercise in the Google SRE book.

#### Resources

*   [Disaster Role Playing](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg)
*   [Managing Misfortune for Best Results](https://www.usenix.org/conference/srecon18europe/presentation/barry)
*   [Postmortem Culture: Learning from Failure](https://landing.google.com/sre/book/chapters/postmortem-culture.html)
*   [Postmortem Templates](https://github.com/dastergon/postmortem-templates)
*   [Postmortems Metadata Index](https://postmortems.app)
*   [Site Reliability Engineering Resources](https://github.com/dastergon/awesome-sre)
