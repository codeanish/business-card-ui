const GoldmanSachsIcon = ({
width = 18, // or any default size of your choice
height = 18,
color = "black" // or any color of your choice
}) => {
return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192.756 192.756"
    width={width} // added size here
    height={height} // added size here
    fill={color} // added color here
    fillRule="evenodd"
    clipRule={"evenodd"}
    >
    <path d="M13.837 178.92H178.92V13.837H13.837V178.92z"/>
    <path d="M158.221 51.532H152.5v-22.55h5.385v2.524c.672-1.515 2.355-2.861 4.543-3.029 3.703-.168 6.227 2.02 6.227 6.731v16.323h-5.889V34.536c0-2.02 0-3.702-1.348-4.039-.504-.168-1.346 0-2.02.504-.842.842-1.178 1.851-1.178 3.535l.001 16.996zM60.955 30.497c-1.346-1.178-3.029-2.02-5.048-2.02s-3.534.842-5.048 2.02c-2.356 2.019-3.871 5.721-3.871 9.76 0 4.207 1.515 7.74 3.871 9.76 1.514 1.178 3.029 2.019 5.048 2.019s3.702-.841 5.048-2.019c2.525-2.02 3.871-5.554 3.871-9.76-.001-4.039-1.347-7.741-3.871-9.76zm-2.188 9.76c0 4.207 0 7.573-.673 9.255-.505.841-1.01 1.346-2.188 1.346-1.009 0-1.683-.505-2.019-1.346-.842-1.683-.842-5.049-.842-9.255 0-4.039 0-7.573.842-9.256.336-.841 1.01-1.346 2.019-1.346 1.178 0 1.683.504 2.188 1.346.842 1.683.673 5.217.673 9.256zM119.686 60.114v6.058h-1.178c-.674-2.523-1.684-4.711-4.377-4.88-1.682-.167-3.197.842-3.365 2.356-.168 1.514.338 2.86 3.365 4.543 3.871 2.188 6.9 3.198 6.9 7.741 0 4.88-4.207 7.236-7.74 7.236h-6.732v-8.415h1.178c.842 4.375 2.188 7.068 5.387 7.236 2.018 0 3.533-1.178 3.533-3.366s-1.348-3.534-4.545-5.385c-3.533-2.188-5.721-3.534-5.721-6.563 0-4.039 2.861-6.563 7.404-6.563 1.514.002 5.891.002 5.891.002zM127.09 51.532V35.208c0-4.711-2.525-6.899-6.227-6.731-2.525.168-4.039 1.852-4.713 3.197-.842-2.355-2.691-3.365-5.385-3.197-2.188.168-3.869 1.515-4.543 3.029v-2.524h-5.217v22.55h5.721V34.536c0-1.684.17-2.693 1.178-3.535.674-.504 1.348-.672 1.852-.504 1.348.336 1.348 2.019 1.348 4.039v16.996h5.721V34.368c0-1.516.336-2.525 1.178-3.367.674-.504 1.346-.672 1.852-.504 1.346.336 1.514 2.019 1.514 4.039v16.996h5.721zM68.696 24.271h5.89v27.261h-5.89V24.271zM95.453 51.532V24.271h-5.89v6.394c-.504-1.178-1.683-2.019-3.365-2.019-4.207 0-7.573 4.375-7.741 11.106-.168 4.544 1.346 12.116 7.236 12.116 2.356 0 3.702-1.346 4.207-2.523v2.188h5.553v-.001zm-6.9-20.699c1.178 1.683 1.178 5.721 1.178 8.918 0 3.366.168 7.741-1.178 9.592-.505.673-1.01 1.009-1.852 1.009-1.177 0-1.851-1.346-2.188-3.534-.168-2.02-.168-4.544-.168-7.236 0-4.543.336-9.592 2.524-9.592.842.002 1.179.339 1.684.843zM144.59 29.655c1.516.842 2.525 2.188 2.525 5.217v16.66h-5.555v-2.524c-.672 1.851-2.523 3.029-5.049 3.029-2.02 0-5.553-1.009-5.553-6.226 0-4.88 3.199-5.89 6.732-7.404 3.197-1.346 3.533-1.515 3.533-2.861v-3.702c0-1.514-.842-2.188-2.523-2.188-.674.168-1.852.504-1.852 1.346-.168 1.01 1.01 1.01 1.178 2.525.168 2.356-1.684 3.197-3.365 3.029-1.178 0-2.525-.673-2.693-2.524-.168-3.03 3.197-5.554 7.91-5.554 2.188-.001 3.534.504 4.712 1.177zm-3.365 8.414l-1.852 1.178c-1.85 1.178-2.188 2.692-2.355 4.375-.168 1.346-.168 2.524 0 4.543.168 1.851 1.346 2.188 2.355 1.851 1.18-.505 1.852-2.692 1.852-5.049v-6.898zM61.292 61.124c1.515 1.009 2.356 2.187 2.356 5.216v16.829h-5.385v-2.524c-.674 1.683-2.524 2.86-5.049 2.86-2.188 0-5.553-.841-5.553-6.058 0-4.88 3.198-5.89 6.563-7.404 3.365-1.515 3.702-1.683 3.702-2.861V63.48c0-1.683-.841-2.355-2.524-2.188-.674 0-1.851.337-1.851 1.178-.168 1.178 1.009 1.178 1.177 2.692.169 2.188-1.682 3.029-3.364 3.029-1.178-.168-2.525-.841-2.693-2.692-.168-2.861 3.197-5.385 7.909-5.385 2.187 0 3.534.337 4.712 1.01zm-3.366 8.414l-1.851 1.178c-1.851 1.178-2.188 2.692-2.356 4.375-.168 1.346-.168 2.693 0 4.543 0 2.02 1.178 2.356 2.188 1.851 1.346-.505 2.019-2.524 2.019-5.048v-6.899zM102.016 66.845c0-4.712-2.525-7.068-6.227-6.731-1.851.168-3.366 1.01-4.208 2.188V55.74H85.86v15.482c0 5.721-4.039 11.106-8.077 10.938-2.861 0-3.534-2.188-3.871-4.544-.505-3.366-.505-7.236-.168-11.443.337-2.692 1.01-4.88 3.03-4.88 1.514 0 1.683 1.01 1.009 1.683-.674.842-1.683 1.683-1.178 3.534.504 2.02 3.702 2.356 5.216.842 1.178-1.346 1.01-3.534.168-4.88-1.01-1.683-2.692-2.356-5.216-2.356-3.198 0-9.256 2.86-9.256 11.948 0 9.76 6.226 11.442 9.76 11.442 4.039 0 7.573-3.533 8.582-6.395v6.059h5.721V66.171c0-1.682.337-2.692 1.178-3.534.673-.504 1.515-.673 2.02-.504 1.347.336 1.347 2.019 1.347 4.038v16.997h5.89V66.845h.001zM43.117 23.765v9.592h-1.178c-1.01-4.712-3.197-8.246-6.227-8.414-2.019-.168-3.197 1.009-4.207 2.693-1.009 2.019-1.514 6.226-1.514 11.274 0 4.712.168 8.246.673 10.77.336 1.178 1.178 3.03 3.366 3.03 1.178 0 2.019-.337 2.524-1.01.841-1.01 1.009-3.029 1.009-4.375v-4.543c0-1.683-.504-2.693-1.346-3.197-.673-.337-1.683-.337-2.188-.505v-1.178h9.423v24.064h-1.178c-.504-1.851-.841-3.197-1.683-4.712-.841-1.514-2.356-3.197-4.88-3.197-2.692-.168-4.712 1.515-4.712 4.038 0 3.366 2.02 4.207 5.722 6.227 3.534 2.019 8.078 3.702 8.078 9.592 0 5.722-4.88 9.256-10.433 9.256h-8.919V71.557h1.178c1.515 8.75 5.217 10.265 7.742 10.265 3.196 0 4.711-2.02 4.711-4.88-.168-3.702-2.692-5.048-6.227-6.899-5.047-2.861-7.404-4.208-7.404-8.918.168-4.04 3.366-6.563 6.899-7.573-7.404-.841-9.592-7.572-9.423-14.809 0-7.236 4.207-14.977 12.452-14.977l7.742-.001z" fill="#fff"/>    
    </svg>
)
}

export default GoldmanSachsIcon
