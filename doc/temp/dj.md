# PPT

## PROPOSED SOLUTION
*What is your idea and how is that effective in solving the problem?*

* The user is asked a set of personal questions by the application by which the AI algorithm can identify the problem by assessing a set of parameters derived from the answers given and provide a diagnosis of his/her mental condition.
* The model is trained on the parameters which help us decide the mental condition of the user
* For e.g., if the user has anxiety and after he answers the questions of fills the necessary, the algorithm matches the parameters with the trained data to diagnose his mental condition.

## INNOVATION & USP
*What is unique or innovative about your solution compared to existing ones*

* **Proactive, Passive Detection:** The system shifts from reactive clinical diagnosis to preventive early risk indication, utilizing passive behavioral signals (like sleep and activity routines) rather than intrusive questionnaires or medical labels.

* **Personalized Adaptive AI:** Instead of using generic population thresholds, the AI learns individual user baselines to accurately detect deviations in personal habits, ensuring high personalization and significantly reducing false alarms.

* **Privacy-First & Non-Intrusive:** Designed as a strictly non-clinical tool, it analyzes metadata patterns without accessing message content, camera feeds, or personal chats, ensuring ethical monitoring suitable for schools and workplaces.

## TECHNICAL APPROACH
*Technologies to be used (APIs, Language, etc)*

### Privacy-First AI for Early Mental Well-Being Risk Detection*

- Passive Inputs: Sleep timing, activity rhythm, app usage patterns (metadata only)
- Personal Baseline: AI learns each user’s normal routine (no population comparison)
- ML Models: Unsupervised anomaly detection (Autoencoders, Isolation Forest)
- Output: Early risk indicators \& trend changes (no diagnosis)
- Ethics: No surveys, no content access, no medical labels

### TECH STACK USED
- Core Language

  - Python

- Machine Learning & Data Processing

  - NumPy

  - Pandas

  - Scikit-learn

- Backend (API Layer)

  - FastAPI – model serving & APIs

 - Database

   - PostgreSQL / SQLite 

- Frontend

  - React.js
  - Tailwind CSS 

![Technical Flowchart](https://github.com/dhivyanj/NilaiAI/blob/feature/ak/doc/Flowchart.png)

## IMPACT & BENEFITS
*Potential impact on the audience. how is it beneficial in solving the problem?*

* **Proactive & Stigma-Free Support System:** Shifts the focus from reactive crisis management to proactive prevention, empowering users with early self-insight while reducing stigma by analyzing behavioral patterns rather than assigning clinical diagnoses.

* **Ethical AI Standardization:** Sets a benchmark for responsible AI by demonstrating that meaningful insights can be derived using privacy-first, non-invasive methods that strictly minimize data collection and prioritize user trust.

* **Personalized Institutional Framework:** Challenges generic metrics by utilizing personalized baselines, offering educational and corporate institutions a scalable blueprint for early-signal support systems that respect diverse lifestyles and human complexity.

## RESEARCH
*Details/links of reference and research*

