# Data Exploration on Ford GoBike System dataset
## by Khoa Do


## Dataset

> This data set includes information about individual rides made in a bike-sharing system covering the greater San Francisco Bay area.
> The dataset include 183412 entries and 16 columns. After cleaning and enriching the data, there are 174952 entries left and the columns increase to 21.
  Most of the columns are numerical. Some of the categorical columns are: start_station_name, end_station_name, user_type, member_gender, day_of_week.


## Summary of Findings

> Some findings that I have after using Univariate, Bivariate and Multivariate Exploration are:

- After applying the log-scale and exclude some very large value from the visualization, I can see clearly that the trip duration has a normal distribution, with most of the trip lenght is from 8.3 - 11.6 mins (500-700 secs).
- For trip distance, we don't need to apply scaling on the data. However, we can see clearly from the histogram that there are around 3,500 trips with distance = 0km, maybe this is because the trip starting station and end station are the same.
On the other hand, for the trip distance more than 0km, most of the trips having distance from 1-1.4km. And the distribution is skewed to the right with a long tail.
- Most of the user in the data set is Subscriber: the number of trip taken by subcriber is 9 times larger then by the other one - Customer. However, the average duration of trips taken by Customer double that of Subscriber. It shows a hint that the subscriber use the service more regularly, but the customer use the bike service for a longer period each time on average.
- We can see from the histogram that most of the users are in the age of 35-40.
- Most of the bicycle users in the dataset are male (74.6%). Which is 3 time larger than the proportion of female and other in total.
- The trip number increasing gradually from beginning of the week (Monday) and reach a peak in the middle (Thursday), then drop significantly at the weekend. Turning to hour in a day, there are 2 peeks in the visualization at 8-9AM and 5-6PM, these are likely time when people commute from home to their workplace.
- There is a significant trend between working days (Mon-Fri) and weekend (Saturday, Sunday):
  + During working days, there are more trips from 8-9AM and 5-6PM, likely when they go to work and back home.
  + During weekends, the trip numbers increase gradually from 6AM and then peak at 1PM. It is likely that during weekend, when they don't have to work, people tend to go outsides during the daylight.
  + In general, during weekend, people tend to stay at home more, as the peak of trip number during working days is around 8 times of that during weekend.
- 3% of the station takes up 15% of the trip occur. So it seems that not any station takes up a major proportion of the trips occur.
- Based on the visualization using correlation matrix and scatter plot, I see there is a weak relation between these numeric values:
 + For trip distance and duration, the reason might be because a lot of trips start and end at the same station, or a station near to that, so the distance equal to 0 or very small, though the duration is pretty long.
 + The relation strength between member age and duration is also very very small (0.006). May be the age is not a good feature to predict the trip length.
- In general, the trip duration and distance seems to be higher with user type is Customer. Besides, the trip duration and distance also get higher from Thursday to weekend, compared to the other days. 
  + For member gender, I don't see a significant impact on the numerical metrics.
- Both scatter visualization for Customer and Subscriber having positive relation, and the trend is pretty clear. However, there are still noise, indicate that the correlation value is not significant.
- There is a clear pattern in the distribution of trips take place during the week:
  + For both customers and subscriber, most of the trips taken place during 8-9h and 17-18h during working days, and 11h-15h during weekend.
  + For customer, they are likely to go outside during mid-day of weekend than in working days (evident is that the weekend count number is around 2-3 times as much of that during working days).
  + For subscribers, they also likely to use the service during midday in weekend than other time in the day, but the number of trip is fairly equal to that during working days.
- For the trip taken by Customers during midday or midnight, the trip duration tend to be longer than the trip start at other time in the day. This pattern is not really clear during weekend. In overall, the average trip duration taken place by Customer is quite higher than that by Subscriber.


## Key Insights for Presentation

> Some key insights I inferred after investigating the dataset using visualization tools:

1/ Most of the user in the data set is Subscriber: the number of trip taken by subcriber is 9 times larger then by the other one - Customer. However, the average duration of trips taken by Customer double that of Subscriber. It shows a hint that the subscriber use the service more regularly, but the customer use the bike service for a longer period each time on average.

2/ The frequency of service usage by Subscribers are higher than that of Customer, yet Customers are the ones who use the service longer on average.

3/ There is a significant trend betweek working days (Mon-Fri) and weekend (Saturday, Sunday): During working days, there are more trips from 8-9AM and 5-6PM, likely when they go to work and back home. During weekends, the trip numbers increase gradually from 6AM and then peak at 1PM. It is likely that during weekend, when they don't have to work, people tend to go outsides during the daylight. In general, during weekend, people tend to stay at home more, as the peak of trip number during working days is around 8 times of that during weekend.
