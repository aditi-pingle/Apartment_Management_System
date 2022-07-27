import streamlit as st
import pickle
import numpy as np

model = pickle.load(open('model.pkl', 'rb'))


def predict_forest(bedrooms, area):
    input = np.array([[bedrooms, area]]).astype(np.float64)
    prediction = model.predict(input)
    pred = '{0:.{1}f}'.format(prediction[0], 2)
    return float(pred)


def main():
    # st.title("Streamlit Tutorial")
    html_temp = """
    <div style="background-color:#025246 ;padding:10px">
    <h2 style="color:white;text-align:center;">House Price Prediction  </h2>
    </div>
    """
    st.markdown(html_temp, unsafe_allow_html=True)

    bedrooms = st.text_input("No. of Bedrooms", "Type Here")
    area = st.text_input("Area", "Type Here")

    # safe_html="""  
    #   <div style="background-color:#F4D03F;padding:10px >
    #    # <h2 style="color:white;text-align:center;"> Your forest is safe</h2>
    #    </div>
    # """
    # danger_html="""
    #   <div style="background-color:#F08080;padding:10px >
    #    # <h2 style="color:black ;text-align:center;"> Your forest is in danger</h2>
    #    </div>
    # """

    if st.button("Predict"):
        output = predict_forest(bedrooms, area)
        st.success('Cost of the House is  {}'.format(output))

        # if output > 0.5:
        #     st.markdown(danger_html,unsafe_allow_html=True)
        # else:
        #     st.markdown(safe_html,unsafe_allow_html=True)


if __name__ == '__main__':
    main()
