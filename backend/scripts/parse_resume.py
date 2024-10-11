import spacy
from pyresparser import ResumeParser

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Resume path passed via command line argument
import sys
resume_path = sys.argv[1]

# Parse the resume
data = ResumeParser(resume_path).get_extracted_data()

# Print the extracted data
print(data)
print("Parser is running successfully!")