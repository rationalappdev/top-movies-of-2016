import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl,  // Refreshes the list on pull down
  StatusBar
} from 'react-native';
import Row from './Row';
import Movie from './Movie';

const demoData = [
  {
    title: 'Zootopia',
    rating: 98,
    image: 'https://resizing.flixster.com/KlpTsb1_ZvS6qRLZHs9ao5LC8rk=/740x290/v1.bjsxMDQ5NDU2O2o7MTcxNTc7MTIwMDsyMDQ4OzEzMjU',
    large: 'https://resizing.flixster.com/IBgqlHT_rKpHSVNsM0sXqbV4LRQ=/fit-in/1152x864/v1.bjsxMDQ5NDU2O2o7MTcxNTc7MTIwMDsyMDQ4OzEzMjU',
    plot: "The modern mammal metropolis of Zootopia is a city like no other. Comprised of habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it's a melting pot where animals from every environment live together-a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when rookie Officer Judy Hopps (voice of Ginnifer Goodwin) arrives, she discovers that being the first bunny on a police force of big, tough animals isn't so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking, scam-artist...",
  },
  {
    title: 'Hell or High Water',
    rating: 98,
    image: 'https://resizing.flixster.com/LLIZ382Kh4RT6CT9gqiUIEo0mBg=/740x290/v1.bjsxMTE5MTAzO2o7MTcxNTc7MTIwMDszMDAwOzIwMDA',
    large: 'https://resizing.flixster.com/DkiyuHT_3ElnSROaH9SmrU6PaSg=/fit-in/1152x864/v1.bjsxMTE5MTAzO2o7MTcxNTc7MTIwMDszMDAwOzIwMDA',
    plot: 'Texas brothers--Toby (Chris Pine), and Tanner (Ben Foster), come together after years divided to rob branches of the bank threatening to foreclose on their family land. For them, the hold-ups are just part of a last-ditch scheme to take back a future that seemed to have been stolen from under them. Justice seems to be theirs, until they find themselves on the radar of Texas Ranger, Marcus (Jeff Bridges) looking for one last grand pursuit on the eve of his retirement, and his half-Comanche partner, Alberto (Gil Birmingham). As the brothers plot a final bank heist to complete their scheme, and with the Rangers on their heels, a...',
  },
  {
    title: 'The Jungle Book',
    rating: 95,
    image: 'https://resizing.flixster.com/4n38K0ACGyX61Pwe7prYKrN4Eu0=/740x290/v1.bjsxMDUzNDE0O2o7MTcxNTc7MTIwMDsyMDk4OzExNzQ',
    large: 'https://resizing.flixster.com/Oye7lbY02WO0WV_KugmP5FlYHEA=/fit-in/1152x864/v1.bjs5NDIxMDM7ajsxNzE1NTsxMjAwOzUwMDA7MjgxMw',
    plot: 'In this reimagining of the classic collection of stories by Rudyard Kipling, director Jon Favreau uses visually stunning CGI to create the community of animals surrounding Mowgli (Neel Sethi), a human boy adopted by a pack of wolves. The appearance of a villainous tiger named Shere Khan (voiced byIdris Elba) forces Mowgli\'s guardian, the panther Bagheera (Ben Kingsley), to shepherd the child to safety in the "man village." Along the way, the boy meets an affable, lazy bear named Baloo (Bill Murray), as well as a snake with hypnotic powers (Scarlett Johansson) and an orangutan (Christopher Walken) who wants to harness...',
  },
  {
    title: 'Love & Friendship',
    rating: 98,
    image: 'https://resizing.flixster.com/eW-nwFBWfzeD-IY08qy6gI-prgc=/740x290/v1.bjsxMDk4NjAyO2o7MTcxNTc7MTIwMDs2MTQ0OzQwOTY',
    large: 'https://resizing.flixster.com/M25ijUAdQfuQpWm7BJr_ggz2X6M=/fit-in/1152x864/v1.bjsxMDk4NjAyO2o7MTcxNTc7MTIwMDs2MTQ0OzQwOTY',
    plot: 'Beautiful young widow Lady Susan Vernon visits to the estate of her in-laws to wait out the colourful rumours about her dalliances circulating through polite society. Whilst ensconced there, she decides to secure a husband for herself and a future for her eligible but reluctant daughter, Frederica. In doing so she attracts the simultaneous attentions of the young, handsome Reginald DeCourcy, the rich and silly Sir James Martin and the divinely handsome, but married, Lord Manwaring, complicating matters severely...',
  },
  {
    title: 'Finding Dory',
    rating: 94,
    image: 'https://resizing.flixster.com/S8_NJxnxvIA9tKpzeUnQudSDlTw=/740x290/v1.bjsxMTI5MDgyO2o7MTcxNTg7MTIwMDsxODAwOzg0MA',
    large: 'https://resizing.flixster.com/nmL3PCIDGK7eOxL-fcAZ8ApNb34=/fit-in/1152x864/v1.bjsxMDU5OTI3O2o7MTcxNTc7MTIwMDs0MjcyOzIzMDI',
    plot: '"Finding Dory" reunites the friendly-but-forgetful blue tang fish with her loved ones, and everyone learns a few things about the true meaning of family along the way. The all-new big-screen adventure dives into theaters in 2016, taking moviegoers back to the extraordinary underwater world from the original film...',
  },
  {
    title: 'Hunt for the Wilderpeople',
    rating: 98,
    image: 'https://resizing.flixster.com/Z2wwu1dCuCecg4TzOeJe82c_kjU=/740x290/v1.bjsxMDkyNjEyO2o7MTcxNTc7MTIwMDsyMDQ4OzEzNjM',
    large: 'https://resizing.flixster.com/yV1MZxQiMaVx8I3qfYbO0rDJLNg=/fit-in/1152x864/v1.bjsxMDkyNjEyO2o7MTcxNTc7MTIwMDsyMDQ4OzEzNjM',
    plot: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. He quickly finds himself at home with his new foster family: the loving Aunt Bella, the cantankerous Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship Ricky to another home, both he and Hec go on the run in the bush. As a national manhunt ensues, the newly branded outlaws must face their options: go out in a blaze of glory or overcome their differences and survive as a family. Equal parts road comedy and rousing adventure story, director Taika Waititi (WHAT WE DO IN THE SHADOWS, upcoming...',
  },
  {
    title: 'Kubo and the Two Strings',
    rating: 97,
    image: 'https://resizing.flixster.com/6mem3h1225eHWjxuIp7DbwsQl5I=/740x290/v1.bjsxMTUxNzQ5O2o7MTcxNTg7MTIwMDsyMDQ4Ozg1OA',
    large: 'https://resizing.flixster.com/aA0m4xiyBEDpyCSZ5U-e_apqueI=/fit-in/1152x864/v1.bjsxMDE1NjA4O2o7MTcxNTY7MTIwMDsxMDI0OzEwMjQ',
    plot: 'Kubo and the Two Strings is an epic action-adventure set in a fantastical Japan from acclaimed animation studio LAIKA. Clever, kindhearted Kubo (voiced by Art Parkinson of "Game of Thrones") ekes out a humble living, telling stories to the people of his seaside town including Hosato (George Takei), Akihiro (Cary-Hiroyuki Tagawa), and Kameyo (Academy Award nominee Brenda Vaccaro). But his relatively quiet existence is shattered when he accidentally summons a spirit from his past which storms down from the heavens to enforce an age-old vendetta. Now on the run, Kubo joins forces with Monkey (Academy Award...',
  },
  {
    title: 'Captain America: Civil War',
    rating: 90,
    image: 'https://resizing.flixster.com/b4pCL3JsCWG7cHVQHSuKQICkGY4=/740x290/v1.bjsxMDYyMDcwO2o7MTcxNTc7MTIwMDsyMDAwOzEzMzM',
    large: 'https://resizing.flixster.com/Gqa03F1e9dz4oQR0NjrxUOxbYMc=/fit-in/1152x864/v1.aDsxMzQ5MzE7ajsxNzE0NjsxMjAwOzIxNTg7MTEzNg',
    plot: 'Marvel\'s "Captain America: Civil War" finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps-one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark\'s surprising decision to support government...',
  },
  {
    title: 'Sing Street',
    rating: 97,
    image: 'https://resizing.flixster.com/D8Vx220eg3b8Rs_mNnB1UXQtB7Y=/740x290/v1.bjsxMDc1MjQ4O2o7MTcxNTc7MTIwMDsxMTcxOzc2OA',
    large: 'https://resizing.flixster.com/KgXoAetuj_hehmjej-tzme82SEg=/fit-in/1152x864/v1.bjsxMDc1MjQ4O2o7MTcxNTc7MTIwMDsxMTcxOzc2OA',
    plot: 'From director John Carney (ONCE, BEGIN AGAIN), SING STREET takes us back to 1980s Dublin seen through the eyes of a 14-year-old boy named Conor (Ferdia Walsh-Peelo) who is looking for a break from a home strained by his parents\' relationship and money troubles, while trying to adjust to his new inner-city public school where the kids are rough and the teachers are rougher. He finds a glimmer of hope in the mysterious, über-cool and beautiful Raphina (Lucy Boynton), and with the aim of winning her heart he invites her to star in his band\'s music videos. There\'s only one problem: he\'s not part of a band...yet. She...',
  },
  {
    title: 'Moonlight',
    rating: 99,
    image: 'https://resizing.flixster.com/uqgUagErgMx2ew7AUMX8pfU8ehQ=/740x290/v1.bjsxMjI0NTk3O2o7MTcxNTk7MTIwMDsxMjgwOzcyMA',
    large: 'https://resizing.flixster.com/uFehzMj2094RvPYwVaza7Ev6ec4=/fit-in/1152x864/v1.bjsxMjM2MDY2O2o7MTcxNTk7MTIwMDsyMDcyOzIwNzI',
    plot: 'The tender, heartbreaking story of a young man\'s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.',
  },
];

export default class List extends Component {

  /**
   * Store the data for ListView
   */
  state = {
    // ListView DataSource object
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    // Used for RefreshControl
    isRefreshing: false,
  }

  /**
   * Call _fetchData after component has been mounted
   */
  componentDidMount() {
    StatusBar.setHidden(true);
    // Fetch Data
    this._fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
  _fetchData = () => {
    // Data is being refreshed
    this.setState({ isRefreshing: true });
    this.setState({
      // Fill up DataSource with demo data
      dataSource: this.state.dataSource.cloneWithRows(demoData),
      // Data has been refreshed by now
      isRefreshing: false,
    });
  }

  /**
   * Render a row
   */
  _renderRow = (movie) => {
    return (
      <Row
        // Pass movie object
        movie={movie}
        // Pass a function to handle row presses
        onPress={()=>{
          // Navigate to a separate movie detail screen
          this.props.navigation.navigate('Movie',{
            movie: movie,
          });
        }}
      />
    );
  }

  /**
   * Renders the list
   */
  render() {
    return (
      <ListView
        // Data source from state
        dataSource={this.state.dataSource}
        // Row renderer method
        renderRow={this._renderRow}
        // Refresh the list on pull down
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._fetchData}
          />
        }
      />
    );
  }
}
