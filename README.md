Problems:

- Make it so that when the users Profile page loads, it loads all
 existing conversations in the sidebar as clickable divs. 
  -When you click the divs it will open a conversation in the middle with all messages and an input to send messages

- Need to figure out how to update conversations without making infintie requests

- conversations.map on the conversationshow component currently maps 3 items because it is mapping the 3 conversations. Need to make a useState that creates a messageList with that specific conversations messages, and then map that. Also need to make the page load if not loaded yet or else you get a .map is not a function error

- wherever the message list needs to load, I need to take the stored conversationId and do a backend get to find the conversation with that ID and then use that to store
the messages in a useState that is then used to display them with the map